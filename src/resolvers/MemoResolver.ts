import { Resolver, Query, Ctx, UseMiddleware, Arg } from "type-graphql";
import { Context } from "../context";
import { Proto } from "../generated"
import ValidateToken from "../middlewares/ValidateToken";

@Resolver()
export default class MemoResolver {
  @Query((_returns) => Proto, { nullable: true })
  @UseMiddleware(ValidateToken)
  async getMemoByDateString(@Arg("dateString") dateString: string, @Ctx() { prisma, req }: Context): Promise<Proto | null> {
    const userId = req.user.id

    return await prisma.proto.findFirst({
      where: { userId, dateString },
    }) 
  }
}
