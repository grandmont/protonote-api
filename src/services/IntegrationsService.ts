import { AuthenticationError } from "apollo-server-core";
import { CookieOptions } from "express";

import { Integration, IntegrationStatus } from "../generated";
import { IntegrationsInput } from "../schemas/Integrations";
import { Context, prisma } from "../context";
import { getIntegrationProvider } from "../utils/helpers";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  // domain: 'localhost',
  sameSite: "none",
  secure: true,
};

if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

async function findOrCreateIntegration({
  externalId,
  userId,
  provider,
  refreshToken,
  status,
}: Partial<Integration>): Promise<Integration | null> {
  const integration = await prisma.integration.findFirst({ where: { userId } });

  if (!integration) {
    return await prisma.integration.create({
      data: {
        externalId,
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
      const { accessToken, refreshToken, provider } = input;

      const integrateProvider = getIntegrationProvider(provider);

      const userInfo = await integrateProvider(accessToken);

      if (userInfo.error) {
        throw new AuthenticationError(
          "Request is missing required authentication credential. Expected OAuth 2 access token, login cookie or other valid authentication credential."
        );
      }

      const integrationInfo = {
        externalId: userInfo?.id,
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
