import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import { buildSchema } from "type-graphql";

import { context } from "./context";
import { schema } from "./schema";
import { applyResolversEnhanceMap } from "./generated"
import resolversEnhanceMap from "./config/middleware";

const port = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());

async function bootstrap() {
  applyResolversEnhanceMap(resolversEnhanceMap);

  const server = new ApolloServer({
    schema: await buildSchema(schema),
    context,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

bootstrap();
