import { AuthenticationError } from "apollo-server-core";
import { CookieOptions } from "express";
import fetch from "node-fetch";
import { IntegrationProvider } from "../generated";

import { DEEZER_API_URL } from "../config/constants";
import { RegisterIntegrationInput } from "../schemas/Integrations";
import IntegrationsService from "./IntegrationsService";
import { Context } from "../context";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  // domain: 'localhost',
  sameSite: "none",
  secure: true,
};

if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

export default class YouTubeService {
  async getUserInfo({ accessToken }) {
    try {
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async registerYouTube(
    { accessToken, refreshToken }: RegisterIntegrationInput,
    ctx: Context
  ) {
    if (!refreshToken) {
      throw new AuthenticationError("Request is missing refresh token.");
    }

    try {
      //   const user = await this.getUserInfo({ accessToken });
      //   console.log(user);

      const integrationsService = new IntegrationsService();

      const integration = await integrationsService.registerIntegration(
        {
          refreshToken,
          provider: IntegrationProvider.YOUTUBE,
        },
        ctx
      );

      return {
        status: "success",
        integration,
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
