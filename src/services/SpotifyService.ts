import { AuthenticationError } from "apollo-server-core";
import { CookieOptions } from "express";
import fetch from "node-fetch";
import { User } from "@prisma/client";

import {
  getRecentlyPlayedTracks,
  storeRecentlyPlayedTracks,
} from "../utils/spotify";
import { SPOTIFY_ACCOUNT, SPOTIFY_API_URL } from "../config/constants";
import { SpotifyInput } from "../schemas/SpotifySchema";

// init spotify config
const spClientId = process.env.SPOTIFY_CLIENT_ID;
const spClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
// const spClientCallback = process.env.SPOTIFY_REDIRECT_URI;
const authString = Buffer.from(spClientId + ":" + spClientSecret).toString(
  "base64"
);
const authHeader = `Basic ${authString}`;

const cookieOptions: CookieOptions = {
  httpOnly: true,
  // domain: 'localhost',
  sameSite: "none",
  secure: true,
};

if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

export default class SpotifyService {
  async swapSpotifyCode(input: SpotifyInput) {
    console.log("swapSpotifyCode");
    try {
      // build request data
      const reqData = {
        grant_type: "authorization_code",
        redirect_uri: input.redirectUri,
        code: input.code,
      };

      const formBody = Object.keys(reqData)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(reqData[key])
        )
        .join("&");

      const response = await fetch(SPOTIFY_ACCOUNT, {
        method: "POST",
        body: formBody,
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const result = await response.json();

      console.log("swapSpotifyCode result:", result);

      return {
        accessToken: result.access_token,
        refreshToken: result.refresh_token,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async refreshSpotifyAccessToken(input: SpotifyInput) {
    try {
      // ensure refresh token parameter
      if (!input.refreshToken) {
        throw new AuthenticationError(
          "Request is missing required authentication credential. Expected OAuth 2 access token, login cookie or other valid authentication credential."
        );
      }

      // build request data
      const reqData = {
        grant_type: "refresh_token",
        refresh_token: input.refreshToken,
      };

      const formBody = Object.keys(reqData)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(reqData[key])
        )
        .join("&");

      const response = await fetch(SPOTIFY_ACCOUNT, {
        method: "POST",
        body: formBody,
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const result = await response.json();

      return {
        accessToken: result.access_token,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getPlaybackState(input: SpotifyInput) {
    const accessToken = input.accessToken;
    const refreshToken = input.refreshToken;

    if (!refreshToken) {
      throw new AuthenticationError("Request is missing refresh token.");
    }

    try {
      const response = await fetch(`${SPOTIFY_API_URL}/me/player`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(response);

      if (response.status === 204) return null;

      const data = await response.json();

      // Refresh accessToken
      if (data.error?.status === 401) {
        const { accessToken: newAcessToken } =
          await this.refreshSpotifyAccessToken({ refreshToken });

        if (!accessToken) return null;

        return this.getPlaybackState({
          refreshToken,
          accessToken: newAcessToken,
        });
      }

      if (data.error) return null;

      return data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  async syncRecentlyPlayedTracks(input: SpotifyInput, user: User) {
    const accessToken = input.accessToken;
    const refreshToken = input.refreshToken;
    const dateString = input.dateString;

    if (!accessToken) {
      const { accessToken: newAcessToken } =
        await this.refreshSpotifyAccessToken({ refreshToken });

      return await this.syncRecentlyPlayedTracks(
        {
          refreshToken,
          accessToken: newAcessToken,
          dateString,
        },
        user
      );
    }

    if (!refreshToken) {
      throw new AuthenticationError("Request is missing refresh token.");
    }

    if (!dateString) {
      throw new AuthenticationError("Request is missing dateString.");
    }

    try {
      const data = await getRecentlyPlayedTracks(accessToken);

      // const currentlyPlaying = await getCurrentlyPlayingTrack(accessToken);

      // const {
      //   items: [item],
      // } = data;

      // console.log(item.track);
      // console.log(currentlyPlaying.item);

      console.log("accessToken:", accessToken);

      // Refresh accessToken
      if (data.error?.status === 401) {
        const { accessToken: newAcessToken } =
          await this.refreshSpotifyAccessToken({ refreshToken });

        return await this.syncRecentlyPlayedTracks(
          {
            refreshToken,
            accessToken: newAcessToken,
            dateString,
          },
          user
        );
      }

      if (data.error?.status === 504) {
        console.log(`
  Error 504 - userId: ${user.id}
        `);
        return null;
      }

      if (data.error) {
        console.log(data.error);
        return null;
      }

      return await storeRecentlyPlayedTracks(dateString, data, user);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
