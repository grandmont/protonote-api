import { BuildSchemaOptions, NonEmptyArray } from "type-graphql";
import { relationResolvers, crudResolvers } from "./generated";

import AuthResolver from "./resolvers/AuthResolver";
import MemoResolver from "./resolvers/MemoResolver";
import IntegrationsResolver from "./resolvers/IntegrationsResolver";
import SpotifyIntegration from "./integrations/SpotifyIntegration";

export const schema: BuildSchemaOptions = {
  resolvers: [
    ...relationResolvers,
    ...crudResolvers,
    AuthResolver,
    MemoResolver,
    IntegrationsResolver,
    SpotifyIntegration
  ] as unknown as NonEmptyArray<Function>,
  validate: false,
};
