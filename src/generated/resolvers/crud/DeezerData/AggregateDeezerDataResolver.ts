import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDeezerDataArgs } from "./args/AggregateDeezerDataArgs";
import { DeezerData } from "../../../models/DeezerData";
import { AggregateDeezerData } from "../../outputs/AggregateDeezerData";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerData)
export class AggregateDeezerDataResolver {
  @TypeGraphQL.Query(_returns => AggregateDeezerData, {
    nullable: false
  })
  async aggregateDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeezerDataArgs): Promise<AggregateDeezerData> {
    return getPrismaFromContext(ctx).deezerData.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
