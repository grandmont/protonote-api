import fetch from "node-fetch";
import { SaveRecentlyPlayedTracksResponse } from "../schemas/SpotifySchema";
import { getDateString } from "./parsers";

export const getSpotifyUserInfo = async (accessToken: string) => {
  console.log("accessToken:", accessToken);

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

export const parseRecentlyPlayedTracks = async (data: SaveRecentlyPlayedTracksResponse) => {
  console.log("I should run only once")
  data.items.forEach(({ played_at, track }) => {
    console.log(track.name)

    const dateString = getDateString(new Date(played_at))
    console.log("played at:", dateString)
  })

};
