import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIntegrationDataArgs } from "./args/FindUniqueIntegrationDataArgs";
import { IntegrationData } from "../../../models/IntegrationData";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationData)
export class FindUniqueIntegrationDataResolver {
  @TypeGraphQL.Query(_returns => IntegrationData, {
    nullable: true
  })
  async findUniqueIntegrationData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIntegrationDataArgs): Promise<IntegrationData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationData.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
