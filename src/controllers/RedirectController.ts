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

  const response = await fetch(
    `${DEEZER_ACCESS_TOKEN_URL}?app_id=${DEEZER_APP_ID}&secret=${DEEZER_SECRET_KEY}&code=${code}`
  );

  const result = await response.json();

  console.log(result);

  return res.redirect(`${APP_SCHEME}://redirect`);
});

export default router;
