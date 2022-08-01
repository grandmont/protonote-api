import { NonEmptyArray } from "type-graphql";
import { relationResolvers, crudResolvers } from "../prisma/type-graphql";

import { CustomResolver } from "./resolvers/CustomResolver";

export const schema = {
  resolvers: [...relationResolvers, ...crudResolvers, CustomResolver] as unknown as NonEmptyArray<Function>,
  validate: false,
};
