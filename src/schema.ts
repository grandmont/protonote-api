import { BuildSchemaOptions, NonEmptyArray } from "type-graphql";
import { relationResolvers, crudResolvers } from "../prisma/type-graphql";

import AuthResolver from "./resolvers/AuthResolver";
import MemoResolver from "./resolvers/MemoResolver";
import CustomResolver from "./resolvers/CustomResolver";

export const schema: BuildSchemaOptions = {
  resolvers: [
    ...relationResolvers,
    ...crudResolvers,
    AuthResolver,
    MemoResolver,
    CustomResolver,
  ] as unknown as NonEmptyArray<Function>,
  validate: false,
};
