import jwt, { SignOptions } from "jsonwebtoken";

export const signJwt = (
  payload: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options?: SignOptions
) => {
  const accessTokenPrivateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY;
  const refreshTokenPrivateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;

  const selectedKey = {
    accessTokenPrivateKey,
    refreshTokenPrivateKey,
  }[keyName];

  const privateKey = Buffer.from(selectedKey, "base64").toString("ascii");

  return jwt.sign(payload, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

export const verifyJwt = <T>(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
): T | null => {
  const accessTokenPublicKey = process.env.ACCESS_TOKEN_PUBLIC_KEY;
  const refreshTokenPublicKey = process.env.REFRESH_TOKEN_PUBLIC_KEY;

  const selectedKey = {
    accessTokenPublicKey,
    refreshTokenPublicKey,
  }[keyName];

  const publicKey = Buffer.from(selectedKey, "base64").toString("ascii");

  try {
    return jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    }) as T;
  } catch (error) {
    return null;
  }
};
