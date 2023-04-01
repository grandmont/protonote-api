import { AuthenticationError } from "apollo-server-core";
import { CookieOptions } from "express";
import { IntegrationProvider } from "@prisma/client";

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

async function createOrUpdateIntegration({
  userId,
  provider,
  refreshToken,
  status,
}: Partial<Integration>): Promise<Integration | null> {
  const integration = await prisma.integration.findFirst({
    where: { userId, provider },
  });

  console.log(integration);

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

  return await prisma.integration.update({
    data: {
      provider,
      status,
      refreshToken,
    },
    where: {
      id: integration.id,
    },
  });
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

      const integrationInfo = {
        userId: req.user.id,
        provider,
        refreshToken,
        status: IntegrationStatus.CONNECTED,
      };

      console.log(integrationInfo);

      const integration = await createOrUpdateIntegration(integrationInfo);

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
