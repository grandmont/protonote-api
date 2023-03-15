import fetch from "node-fetch";

import { Context, prisma } from "../context";
import {
  SaveRecentlyPlayedTracksResponse,
  Track,
} from "../schemas/SpotifySchema";
import { IntegrationProvider } from "../generated";
import { getDateString } from "../utils/parsers";

export const getSpotifyUserInfo = async (accessToken: string) => {
  try {
    const userInfoResponse = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const response = await userInfoResponse.json();

    return response;
  } catch (error) {
    return error;
  }
};

export const parseRecentlyPlayedTracks = async (
  dateString: string,
  data: SaveRecentlyPlayedTracksResponse,
  { req }: Context
) => {
  if (!dateString) return null;

  const user = req.user;

  const integration = user.integrations.find(
    ({ provider }) => provider === IntegrationProvider.SPOTIFY
  );

  if (!integration) return null;

  const memo = await prisma.proto.findFirst({
    where: { userId: user.id, dateString },
  });

  const existingData = await prisma.integrationData.findMany({
    where: {
      proto: {
        dateString,
      },
    },
  });

  const entries = data.items
    .filter((item, index, self) => {
      return (
        index === self.findIndex((t) => t.track.id === item.track.id) &&
        getDateString(new Date(item.played_at)) === dateString
      );
    })
    .filter((item) => {
      return !existingData.some(({ data }) => {
        const entry = JSON.parse(data) as Track;

        return entry.track.id === item.track.id;
      });
    });

  // entries.forEach(({ played_at, track }) => {
  //   console.log(track.name);
  //   console.log(getDateString(new Date(played_at)));
  // });

  const { id: memoId } = !memo
    ? await prisma.proto.create({
        data: {
          dateString,
          userId: user.id,
        },
      })
    : memo;

  await prisma.integrationData.createMany({
    data: entries.map((item) => {
      const {
        played_at,
        track: {
          id,
          name,
          external_urls,
          album: { images, artists },
        },
      } = item;

      // Get only the important data
      const track = {
        played_at,
        track: {
          id,
          name,
          external_urls,
          album: {
            images,
            artists: artists.map(({ id, name }) => ({ id, name })),
          },
        },
      };

      return {
        protoId: memoId,
        integrationId: integration.id,
        search: name,
        data: JSON.stringify(track) as string,
      };
    }),
  });

  return true;
};
