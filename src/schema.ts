import { BuildSchemaOptions, NonEmptyArray } from "type-graphql";
import { relationResolvers, crudResolvers } from "@generated/type-graphql";

import AuthResolver from "./resolvers/AuthResolver";
import MemoResolver from "./resolvers/MemoResolver";
import IntegrationsResolver from "./resolvers/IntegrationsResolver";

export const schema: BuildSchemaOptions = {
  resolvers: [
    ...relationResolvers,
    ...crudResolvers,
    AuthResolver,
    MemoResolver,
    IntegrationsResolver,
  ] as unknown as NonEmptyArray<Function>,
  validate: false,
};
