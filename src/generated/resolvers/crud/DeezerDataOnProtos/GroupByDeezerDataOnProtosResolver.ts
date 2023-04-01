import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDeezerDataOnProtosArgs } from "./args/GroupByDeezerDataOnProtosArgs";
import { DeezerDataOnProtos } from "../../../models/DeezerDataOnProtos";
import { DeezerDataOnProtosGroupBy } from "../../outputs/DeezerDataOnProtosGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerDataOnProtos)
export class GroupByDeezerDataOnProtosResolver {
  @TypeGraphQL.Query(_returns => [DeezerDataOnProtosGroupBy], {
    nullable: false
  })
  async groupByDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDeezerDataOnProtosArgs): Promise<DeezerDataOnProtosGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
