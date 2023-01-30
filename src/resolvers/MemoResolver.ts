import { Resolver, Query, Ctx } from "type-graphql";
import { Context } from "../context";
import { Proto } from "../../prisma/type-graphql";

@Resolver()
export default class MemoResolver {
  @Query((_returns) => Proto, { nullable: true })
  async getToday(@Ctx() { prisma }: Context): Promise<Proto | null> {
    return await prisma.proto.findFirst({
      where: { userId: 1 },
      orderBy: {
        createdAt: "desc"
      }
    });
  }
}
