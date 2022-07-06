import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { context } from "./context";
import { schema } from "./schema";

const port = process.env.PORT || 3333;

export const server = new ApolloServer({
  schema,
  context,
});

server
  .listen({
    port,
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
