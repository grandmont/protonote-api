import fetch from "node-fetch";
import { User } from "@prisma/client";

import { prisma } from "../context";
import { SaveRecentlyPlayedTracksResponse } from "../schemas/SpotifySchema";
import { getDateString, getWrittenDateString } from "../utils/parsers";
import { SPOTIFY_API_URL } from "../config/constants";

export const getSpotifyUserInfo = async (accessToken: string) => {
  console.log("getSpotifyUserInfo");
  try {
    const userInfoResponse = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const response = await userInfoResponse.json();

    console.log("getSpotifyUserInfo response:", response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getRecentlyPlayedTracks = async (accessToken: string) => {
  const response = await fetch(
    `${SPOTIFY_API_URL}/me/player/recently-played?limit=50`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.json();
};

export const getPlaybackState = async (accessToken) => {
  const response = await fetch(`${SPOTIFY_API_URL}/me/player`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const storeRecentlyPlayedTracks = async (
  dateString: string,
  data: SaveRecentlyPlayedTracksResponse,
  user: User
) => {
  // Get the memo of the day
  const memo = await prisma.proto.findFirst({
    where: { userId: user.id, dateString },
    include: {
      integrations: {
        include: {
          integrationData: true,
        },
      },
    },
  });

  const integrations = memo ? memo.integrations : [];

  const entries = data.items
    // Remove duplicates and filter by date
    .filter((item, index, self) => {
      return (
        index === self.findIndex((t) => t.track.id === item.track.id) &&
        getDateString(new Date(item.played_at)) === dateString
      );
    })
    // Remove tracks that already exist in the memo
    .filter((item) => {
      return !integrations.some(({ integrationData: { externalId } }) => {
        return externalId === item.track.id;
      });
    });

  // entries.forEach(({ played_at, track }) => {
  //   console.log(track.name);
  //   console.log(getDateString(new Date(played_at)));
  // });

  // Create memo if it does not exist
  const { id: memoId } = !memo
    ? await prisma.proto.create({
        data: {
          title: getWrittenDateString(dateString),
          dateString,
          userId: user.id,
        },
      })
    : memo;

  entries.forEach(async (item) => {
    const integrationData = await prisma.integrationData.findFirst({
      where: { externalId: item.track.id },
    });

    // Update the integrationData by adding relation with the proto
    if (integrationData) {
      console.log("integrationData exists", integrationData.search);
      await prisma.integrationDataOnProtos.create({
        data: {
          protoId: memoId,
          integrationDataId: integrationData.id,
        },
      });
    }

    if (!integrationData) {
      console.log("integrationData does not exist", item.track.name);
      const {
        played_at,
        track: {
          id,
          name,
          external_urls: trackUrls,
          album: { images, artists, external_urls: albumUrls },
        },
      } = item;

      // Get only the important data
      const track = {
        played_at,
        track: {
          id,
          name,
          external_urls: trackUrls,
          album: {
            images,
            artists: artists.map(({ id, name }) => ({ id, name })),
            external_urls: albumUrls,
          },
        },
      };

      const result = await prisma.integrationData.create({
        data: {
          search: name,
          externalId: id,
          data: JSON.stringify(track) as string,
        },
      });

      await prisma.integrationDataOnProtos.create({
        data: {
          protoId: memoId,
          integrationDataId: result.id,
        },
      });
    }
  });

  return true;
};
