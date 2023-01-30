import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma = new PrismaClient();

type ContextParams = {
  req: Request;
  res: Response;
};

export interface Context extends ContextParams {
  prisma: PrismaClient;
}

export const context = ({ req, res }: ContextParams): Context => {
  return {
    prisma,
    req,
    res,
  };
};
