import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { context } from "./context";
import { resolvers } from "../prisma/type-graphql";

const port = process.env.PORT || 3333;

async function bootstrap() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
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
}

bootstrap();
