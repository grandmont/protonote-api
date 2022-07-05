import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export const prisma = new PrismaClient();

type ContextParams = {
  req: Request;
};

export interface Context {
  prisma: PrismaClient;
}

export const context = ({ req }: ContextParams): Context => {
  return {
    prisma,
  };
};
