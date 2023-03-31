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
  console.log("start deezer integration");

  const code = req.query?.code;

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

    console.log("deezer accessToken:", data.access_token);

    console.log(data);

    const listeningHistoryResponse = await fetch(
      `https://api.deezer.com/user/5317837644/history?access_token=${data.access_token}&output=json`
    );

    const listeningHistory = await listeningHistoryResponse.json();

    console.log(listeningHistory);

    return res.redirect(`${APP_SCHEME}://redirect`);
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
});

export default router;
