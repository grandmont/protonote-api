import { ApolloServer } from "apollo-server";
import { context } from "./context";

const port = process.env.PORT || 3333;

import { schema } from "./schema";

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
