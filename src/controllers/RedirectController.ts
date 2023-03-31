import { Router } from "express";
import fetch from "node-fetch";

import { DEEZER_APP_ID, DEEZER_SECRET_KEY } from "../config/constants";

const router = Router();

const DEEZER_ACCESS_TOKEN_URL =
  "https://connect.deezer.com/oauth/access_token.php";

router.get("/deezer", async (req, res) => {
  const code = req.query?.code;

  const redirectUri = req.query?.redirectUri as string;

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

  console.log(response);

  if (!redirectUri) {
    console.log("No redirect url found");
    return res.send("Success");
  }

  return res.redirect(redirectUri);
});

export default router;
