import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { context } from "./context";
import { schema } from "./schema";

const port = process.env.PORT || 4000;

async function bootstrap() {
  const server = new ApolloServer({
    schema: await buildSchema(schema),
    context,
  });

  server
    .listen({
      port,
    })
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
}

bootstrap();
