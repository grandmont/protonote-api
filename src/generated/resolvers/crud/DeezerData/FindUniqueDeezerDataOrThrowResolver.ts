import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDeezerDataOrThrowArgs } from "./args/FindUniqueDeezerDataOrThrowArgs";
import { DeezerData } from "../../../models/DeezerData";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerData)
export class FindUniqueDeezerDataOrThrowResolver {
  @TypeGraphQL.Query(_returns => DeezerData, {
    nullable: true
  })
  async findUniqueDeezerDataOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDeezerDataOrThrowArgs): Promise<DeezerData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
