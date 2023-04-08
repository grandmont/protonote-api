import { Router } from "express";
import fetch from "node-fetch";

import {
  APP_SCHEME,
  DEEZER_APP_ID,
  DEEZER_SECRET_KEY,
} from "../config/constants";

const router = Router();

const DEEZER_ACCESS_TOKEN_URL =
  "https://connect.deezer.com/oauth/access_token.php";

router.get("/deezer", async (req, res) => {
  console.log("start Deezer integration");

  const code = req.query?.code;
  const state = req.query?.state;

  if (!code) {
    return res.send({
      error: {
        message: "No code was returned",
      },
    });
  }

  try {
    const response = await fetch(
      `${DEEZER_ACCESS_TOKEN_URL}?app_id=${DEEZER_APP_ID}&secret=${DEEZER_SECRET_KEY}&code=${code}&output=json`
    );

    const data = await response.json();

    if (!data.access_token) {
      console.log("No access_token was returned");
      return res.redirect(`${APP_SCHEME}://redirect`);
    }

    console.log(data);

    return res.redirect(
      `${APP_SCHEME}://deezer?accessToken=${data.access_token}&state=${state}`
    );
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
});

const YOUTUBE_ACCESS_TOKEN_URL = "https://accounts.google.com/o/oauth2/token";
const REDIRECT_URI = "https://beememo.grandmont.io/youtube";

router.get("/youtube", async (req, res) => {
  console.log("start YouTube integration");

  const code = req.query?.code;
  const state = req.query?.state;

  console.log(req.query);
  console.log(req.params);
  if (!code) {
    return res.send({
      error: {
        message: "No code was returned",
      },
    });
  }

  try {
    const response = await fetch(
      `${YOUTUBE_ACCESS_TOKEN_URL}?code=${code}&client_id=${process.env.YOUTUBE_CLIENT_ID}&client_secret=${process.env.YOUTUBE_CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code`,
      {
        method: "POST",
      }
    );

    const data = await response.json();

    console.log(data);

    if (!data.access_token) {
      console.log("No access_token was returned");
      return res.redirect(`${APP_SCHEME}://redirect`);
    }

    return res.redirect(
      `${APP_SCHEME}://youtube?accessToken=${data.access_token}&refreshToken=${data.refresh_token}&state=${state}`
    );
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
});

export default router;
