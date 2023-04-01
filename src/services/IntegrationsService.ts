import { AuthenticationError } from "apollo-server-core";
import { CookieOptions } from "express";

import { Integration, IntegrationStatus } from "../generated";
import { IntegrationsInput } from "../schemas/Integrations";
import { Context, prisma } from "../context";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  // domain: 'localhost',
  sameSite: "none",
  secure: true,
};

if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

async function findOrCreateIntegration({
  userId,
  provider,
  refreshToken,
  status,
}: Partial<Integration>): Promise<Integration | null> {
  const integration = await prisma.integration.findFirst({ where: { userId } });

  if (!integration) {
    return await prisma.integration.create({
      data: {
        provider,
        status,
        refreshToken,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  // TODO: Add update integration function here

  return integration;
}

export default class IntegrationsService {
  async registerIntegration(input: IntegrationsInput, { req }: Context) {
    console.log("registerIntegration");
    try {
      const { refreshToken, provider } = input;

      if (!refreshToken) {
        throw new AuthenticationError(
          "Request is missing required authentication credential. Expected OAuth 2 access token, login cookie or other valid authentication credential."
        );
      }

      console.log(refreshToken, provider);

      const integrationInfo = {
        userId: req.user.id,
        provider,
        refreshToken,
        status: IntegrationStatus.CONNECTED,
      };

      const integration = await findOrCreateIntegration(integrationInfo);

      return {
        status: "success",
        integration,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
