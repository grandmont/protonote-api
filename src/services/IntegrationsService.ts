import { AuthenticationError, ForbiddenError } from "apollo-server-core";
import { CookieOptions } from "express";
import { User } from "../../prisma/type-graphql";
import { IntegrationsInput } from "../schemas/Integrations";
import { Context, prisma } from "../context";
import { signJwt, verifyJwt } from "../utils/jwt";
import { getGoogleUserInfo } from "../utils/google";

const cookieOptions: CookieOptions = {
  httpOnly: true,
  // domain: 'localhost',
  sameSite: "none",
  secure: true,
};

if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

export default class IntegrationsService {
  // Authenticate User
  async registerIntegration(input: IntegrationsInput, { res }: Context) {
    try {
        console.log(input)

      return {
        status: "success",
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }

}
