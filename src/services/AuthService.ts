import { ForbiddenError } from "apollo-server-core";
import { CookieOptions } from "express";
import { User } from "../../prisma/type-graphql";
import { AuthInput } from "../schemas/Auth";
import { Context, prisma } from "../context";
import { signJwt, verifyJwt } from "../utils/jwt";

// Cookie Options
const accessTokenExpiresIn = 15;
const refreshTokenExpiresIn = 60;

const cookieOptions: CookieOptions = {
  httpOnly: true,
  // domain: 'localhost',
  sameSite: "none",
  secure: true,
};

const accessTokenCookieOptions = {
  ...cookieOptions,
  maxAge: accessTokenExpiresIn * 60 * 1000,
  expires: new Date(Date.now() + accessTokenExpiresIn * 60 * 1000),
};

const refreshTokenCookieOptions = {
  ...cookieOptions,
  maxAge: refreshTokenExpiresIn * 60 * 1000,
  expires: new Date(Date.now() + refreshTokenExpiresIn * 60 * 1000),
};

if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

async function findOrCreateUser(input: AuthInput): Promise<User | null> {
  const { email } = input;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return await prisma.user.create({
      data: {
        email,
      },
    });
  }

  return user;
}

// Sign JWT Tokens
function signTokens(user: User) {
  const userId: string = user.id.toString();

  const access_token = signJwt({ userId }, "accessTokenPrivateKey", {
    expiresIn: `${accessTokenExpiresIn}m`,
  });

  const refresh_token = signJwt({ userId }, "refreshTokenPrivateKey", {
    expiresIn: `${refreshTokenExpiresIn}m`,
  });

  return { access_token, refresh_token };
}

export default class UserService {
  // Authenticate User
  async authenticateUser(input: AuthInput, { res }: Context) {
    try {
      // 1. Find user by email
      const user = await findOrCreateUser(input);

      // 2. Sign JWT Tokens
      const { access_token, refresh_token } = signTokens(user);

      // 3. Add Tokens to Context
      res.cookie("access_token", access_token, accessTokenCookieOptions);
      res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
      res.cookie("logged_in", "true", {
        ...accessTokenCookieOptions,
        httpOnly: false,
      });

      return {
        status: "success",
        user,
        access_token,
      };
    } catch (error) {
      console.error(error);
    }
  }

  // Refresh Access Token
  async refreshAccessToken({ req, res }: Context) {
    try {
      // Get the refresh token
      const { refresh_token } = req.cookies;

      // Validate the RefreshToken
      const decoded = verifyJwt<{ userId: number }>(
        refresh_token,
        "refreshTokenPublicKey"
      );

      if (!decoded) {
        throw new ForbiddenError("Could not refresh access token");
      }

      // Check if user exist and is verified
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });

      if (!user) {
        throw new ForbiddenError("Could not refresh access token");
      }

      // Sign new access token
      const access_token = signJwt(
        { userId: user.id },
        "accessTokenPrivateKey",
        {
          expiresIn: `${accessTokenExpiresIn}m`,
        }
      );

      // Send access token cookie
      res.cookie("access_token", access_token, accessTokenCookieOptions);
      res.cookie("logged_in", "true", {
        ...accessTokenCookieOptions,
        httpOnly: false,
      });

      return {
        status: "success",
        access_token,
      };
    } catch (error) {
      console.error(error);
    }
  }
}
