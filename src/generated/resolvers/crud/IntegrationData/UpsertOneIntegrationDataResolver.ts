import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneIntegrationDataArgs } from "./args/UpsertOneIntegrationDataArgs";
import { IntegrationData } from "../../../models/IntegrationData";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationData)
export class UpsertOneIntegrationDataResolver {
  @TypeGraphQL.Mutation(_returns => IntegrationData, {
    nullable: false
  })
  async upsertOneIntegrationData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIntegrationDataArgs): Promise<IntegrationData> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationData.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
