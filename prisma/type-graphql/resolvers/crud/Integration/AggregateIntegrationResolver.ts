import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIntegrationArgs } from "./args/AggregateIntegrationArgs";
import { Integration } from "../../../models/Integration";
import { AggregateIntegration } from "../../outputs/AggregateIntegration";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Integration)
export class AggregateIntegrationResolver {
  @TypeGraphQL.Query(_returns => AggregateIntegration, {
    nullable: false
  })
  async aggregateIntegration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIntegrationArgs): Promise<AggregateIntegration> {
    return getPrismaFromContext(ctx).integration.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
