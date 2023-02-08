import fetch from "node-fetch";

export const getGoogleUserInfo = async (accessToken: string) => {
  console.log("accessToken:", accessToken);

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

    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
