import { BuildSchemaOptions, NonEmptyArray } from "type-graphql";
import { relationResolvers, crudResolvers } from "./generated";

import AuthResolver from "./resolvers/AuthResolver";
import MemoResolver from "./resolvers/MemoResolver";
import IntegrationsResolver from "./resolvers/IntegrationsResolver";
import AccountResolver from "./resolvers/AccountResolver";
import SystemResolver from "./resolvers/SystemResolver";
import SpotifyIntegration from "./integrations/SpotifyIntegration";
import DeezerIntegration from "./integrations/DeezerIntegration";
import YouTubeIntegration from "./integrations/YouTubeIntegration";

export const schema: BuildSchemaOptions = {
  resolvers: [
    ...relationResolvers,
    ...crudResolvers,

    // Custom resolvers
    AuthResolver,
    MemoResolver,
    IntegrationsResolver,
    AccountResolver,
    SystemResolver,

    // Integrations
    SpotifyIntegration,
    DeezerIntegration,
    YouTubeIntegration,
  ] as unknown as NonEmptyArray<Function>,
  validate: false,
};
