import { AuthenticationError, ForbiddenError } from "apollo-server-core";
import { Context, prisma } from "../context";
import { verifyJwt } from "../utils/jwt";
import { NextFn, ResolverData } from "type-graphql";

const deserializeUser = async ({ context }: ResolverData, next: NextFn) => {
  try {
    const { req } = context as Context

    // Get the access token
    let access_token: string;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      access_token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies?.access_token) {
      const { access_token: token } = req.cookies;
      access_token = token;
    }

    if (!access_token) throw new AuthenticationError("No access token found");

    // Validate the Access token
    const decoded = verifyJwt<{ userId: number }>(
      access_token,
      "accessTokenPublicKey"
    );

    if (!decoded) throw new AuthenticationError("Invalid access token");

    const id = Number(decoded.userId)

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new ForbiddenError(
        "The user belonging to this token no logger exist"
      );
    }

    return next()
  } catch (error: any) {
    console.error(error);
    return error
  }
};

export default deserializeUser;
