import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIntegrationDataArgs } from "./args/AggregateIntegrationDataArgs";
import { IntegrationData } from "../../../models/IntegrationData";
import { AggregateIntegrationData } from "../../outputs/AggregateIntegrationData";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationData)
export class AggregateIntegrationDataResolver {
  @TypeGraphQL.Query(_returns => AggregateIntegrationData, {
    nullable: false
  })
  async aggregateIntegrationData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIntegrationDataArgs): Promise<AggregateIntegrationData> {
    return getPrismaFromContext(ctx).integrationData.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
