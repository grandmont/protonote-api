import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import { buildSchema } from "type-graphql";

import { context } from "./context";
import { schema } from "./schema";
import { applyResolversEnhanceMap } from "./generated";
import resolversEnhanceMap from "./config/middleware";
import RedirectController from "./controllers/RedirectController";
import spotifyJob from "./jobs/spotifyJob";
import deezerJob from "./jobs/deezerJob";

const port = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());

app.use(RedirectController);

async function bootstrap() {
  applyResolversEnhanceMap(resolversEnhanceMap);

  const server = new ApolloServer({
    schema: await buildSchema(schema),
    persistedQueries: false,
    context,
  });

  await server.start();

  server.applyMiddleware({ app });

  spotifyJob.start();
  deezerJob.start();

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
}

bootstrap();
