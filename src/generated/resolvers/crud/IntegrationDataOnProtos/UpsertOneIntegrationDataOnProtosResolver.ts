import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneIntegrationDataOnProtosArgs } from "./args/UpsertOneIntegrationDataOnProtosArgs";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationDataOnProtos)
export class UpsertOneIntegrationDataOnProtosResolver {
  @TypeGraphQL.Mutation(_returns => IntegrationDataOnProtos, {
    nullable: false
  })
  async upsertOneIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
