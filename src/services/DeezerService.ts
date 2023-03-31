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

export default class SpotifyService {
  async getUserInfo({ accessToken }) {
    try {
      const response = await fetch(
        `${DEEZER_API_URL}/user/me?access_token=${accessToken}&output=json`
      );

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async registerDeezer(
    { accessToken }: RegisterIntegrationInput,
    ctx: Context
  ) {
    if (!accessToken) {
      throw new AuthenticationError("Request is missing access token.");
    }

    try {
      const user = await this.getUserInfo({ accessToken });
      console.log(user);

      const integrationsService = new IntegrationsService();

      const integration = await integrationsService.registerIntegration(
        {
          accessToken,
          provider: IntegrationProvider.DEEZER,
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
