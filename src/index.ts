import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import { buildSchema } from "type-graphql";

import { context } from "./context";
import { schema } from "./schema";
import { applyResolversEnhanceMap } from "./generated";
import resolversEnhanceMap from "./config/middleware";

import cronJob from "./jobs/cronJob";

const port = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());

app.get("/redirect", (req, res) => {
  const params = JSON.stringify(req.params);
  const query = JSON.stringify(req.query);
  const body = JSON.stringify(req.body);

  res.send({
    message: "Good",
    params,
    query,
    body,
  });
});

async function bootstrap() {
  applyResolversEnhanceMap(resolversEnhanceMap);

  const server = new ApolloServer({
    schema: await buildSchema(schema),
    persistedQueries: false,
    context,
  });

  await server.start();

  server.applyMiddleware({ app });

  cronJob.start();

  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
}

bootstrap();
