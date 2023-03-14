import { AuthenticationError, ForbiddenError } from "apollo-server-core";
import { Context, prisma } from "../context";
import { verifyJwt } from "../utils/jwt";
import { NextFn, ResolverData } from "type-graphql";

const ValidateToken = async ({ context }: ResolverData, next: NextFn) => {
  try {
    const { req } = context as Context;

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

    const id = Number(decoded.userId);

    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        integrations: true
      }
    });

    if (!user) {
      throw new ForbiddenError(
        "The user belonging to this token no longer exist"
      );
    }

    console.log("hey")
    // req.user = user;
    Object.assign(req, { user });

    return next();
  } catch (error: any) {
    console.error(error);
    return error;
  }
};

export default ValidateToken;
