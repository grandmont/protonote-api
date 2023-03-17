import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIntegrationDataOnProtosArgs } from "./args/AggregateIntegrationDataOnProtosArgs";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { AggregateIntegrationDataOnProtos } from "../../outputs/AggregateIntegrationDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationDataOnProtos)
export class AggregateIntegrationDataOnProtosResolver {
  @TypeGraphQL.Query(_returns => AggregateIntegrationDataOnProtos, {
    nullable: false
  })
  async aggregateIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIntegrationDataOnProtosArgs): Promise<AggregateIntegrationDataOnProtos> {
    return getPrismaFromContext(ctx).integrationDataOnProtos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
