import fetch from "node-fetch";

export const getSpotifyUserInfo = async (accessToken: string) => {
  console.log("accessToken:", accessToken);

  try {
    const userInfoResponse = await fetch(
      "https://api.spotify.com/v1/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const response = await userInfoResponse.json();

    return response;
  } catch (error) {
    return error;
  }
};
