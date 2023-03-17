import fetch from "node-fetch";

export const getGoogleUserInfo = async (accessToken: string) => {
  try {
    const userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
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
