import { AuthenticationError } from "apollo-server-core";
import { CookieOptions } from "express";
import fetch from "node-fetch";

import { SpotifyInput } from "../schemas/Integrations";
import { Context } from "../context";

// init spotify config
const spClientId = process.env.SPOTIFY_CLIENT_ID;
const spClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const spClientCallback = process.env.SPOTIFY_REDIRECT_URI;
const authString = Buffer.from(spClientId + ":" + spClientSecret).toString(
  "base64"
);
const authHeader = `Basic ${authString}`;
const spotifyEndpoint = "https://accounts.spotify.com/api/token";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  // domain: 'localhost',
  sameSite: "none",
  secure: true,
};

if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

export default class SpotifyService {
  async swapSpotifyCode(input: SpotifyInput, { req, res }: Context) {
    try {
      // build request data
      const reqData = {
        grant_type: "authorization_code",
        redirect_uri: spClientCallback,
        code: input.code,
      };

      const formBody = Object.keys(reqData)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(reqData[key])
        )
        .join("&");

      const response = await fetch(spotifyEndpoint, {
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
        refreshToken: result.refresh_token
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async refreshSpotifyAccessToken(input: SpotifyInput, { req, res }: Context) {
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

      const response = await fetch(spotifyEndpoint, {
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
}
