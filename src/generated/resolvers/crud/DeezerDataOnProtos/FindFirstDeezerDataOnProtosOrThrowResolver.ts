import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDeezerDataOnProtosOrThrowArgs } from "./args/FindFirstDeezerDataOnProtosOrThrowArgs";
import { DeezerDataOnProtos } from "../../../models/DeezerDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerDataOnProtos)
export class FindFirstDeezerDataOnProtosOrThrowResolver {
  @TypeGraphQL.Query(_returns => DeezerDataOnProtos, {
    nullable: true
  })
  async findFirstDeezerDataOnProtosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDeezerDataOnProtosOrThrowArgs): Promise<DeezerDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
