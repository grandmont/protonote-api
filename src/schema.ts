import { buildSchemaSync } from "type-graphql";
import { resolvers } from "../prisma/type-graphql";

export const schema = buildSchemaSync({
  resolvers,
  validate: false,
});
