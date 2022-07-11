import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProtoPropArgs } from "./args/GroupByProtoPropArgs";
import { ProtoProp } from "../../../models/ProtoProp";
import { ProtoPropGroupBy } from "../../outputs/ProtoPropGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProtoProp)
export class GroupByProtoPropResolver {
  @TypeGraphQL.Query(_returns => [ProtoPropGroupBy], {
    nullable: false
  })
  async groupByProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProtoPropArgs): Promise<ProtoPropGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
