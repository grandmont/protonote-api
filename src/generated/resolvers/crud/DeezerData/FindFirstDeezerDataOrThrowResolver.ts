import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDeezerDataOrThrowArgs } from "./args/FindFirstDeezerDataOrThrowArgs";
import { DeezerData } from "../../../models/DeezerData";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerData)
export class FindFirstDeezerDataOrThrowResolver {
  @TypeGraphQL.Query(_returns => DeezerData, {
    nullable: true
  })
  async findFirstDeezerDataOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDeezerDataOrThrowArgs): Promise<DeezerData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
