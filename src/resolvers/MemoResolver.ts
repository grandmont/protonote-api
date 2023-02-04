import { Resolver, Query, Ctx, UseMiddleware, Arg } from "type-graphql";
import { Context } from "../context";
import { Proto } from "../../prisma/type-graphql";
import ValidateToken from "../middlewares/ValidateToken";
import { getDateString } from "../utils/parsers";

@Resolver()
export default class MemoResolver {
  @Query((_returns) => Proto, { nullable: true })
  @UseMiddleware(ValidateToken)
  async getToday(@Arg("dateString") dateString: string, @Ctx() { prisma, req }: Context): Promise<Proto | null> {
    const userId = req.user.id

    const lastMemo = await prisma.proto.findFirst({
      where: { userId },
      orderBy: {
        createdAt: "desc"
      }
    });

    if (!lastMemo) return null

    const lastMemoDateString = getDateString(lastMemo.createdAt)

    return dateString === lastMemoDateString ? lastMemo : null 
  }
}
