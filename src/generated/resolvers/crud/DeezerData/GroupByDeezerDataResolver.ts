import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDeezerDataArgs } from "./args/GroupByDeezerDataArgs";
import { DeezerData } from "../../../models/DeezerData";
import { DeezerDataGroupBy } from "../../outputs/DeezerDataGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerData)
export class GroupByDeezerDataResolver {
  @TypeGraphQL.Query(_returns => [DeezerDataGroupBy], {
    nullable: false
  })
  async groupByDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDeezerDataArgs): Promise<DeezerDataGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
