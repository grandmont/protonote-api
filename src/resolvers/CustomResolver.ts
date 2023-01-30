import { Resolver, Query, Ctx } from "type-graphql";
import { Context } from "../context";
import { User } from "../../prisma/type-graphql";

// This is an example of custom resolver
@Resolver()
export default class CustomResolver {
  @Query((_returns) => User, { nullable: true })
  async bestUser(@Ctx() { prisma }: Context): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email: "gabriel@protonote.io" },
    });
  }
}
