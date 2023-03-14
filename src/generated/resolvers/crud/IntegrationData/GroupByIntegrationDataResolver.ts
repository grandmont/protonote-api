import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByIntegrationDataArgs } from "./args/GroupByIntegrationDataArgs";
import { IntegrationData } from "../../../models/IntegrationData";
import { IntegrationDataGroupBy } from "../../outputs/IntegrationDataGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationData)
export class GroupByIntegrationDataResolver {
  @TypeGraphQL.Query(_returns => [IntegrationDataGroupBy], {
    nullable: false
  })
  async groupByIntegrationData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIntegrationDataArgs): Promise<IntegrationDataGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationData.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
