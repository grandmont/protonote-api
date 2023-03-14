import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIntegrationDataOrThrowArgs } from "./args/FindUniqueIntegrationDataOrThrowArgs";
import { IntegrationData } from "../../../models/IntegrationData";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationData)
export class FindUniqueIntegrationDataOrThrowResolver {
  @TypeGraphQL.Query(_returns => IntegrationData, {
    nullable: true
  })
  async findUniqueIntegrationDataOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIntegrationDataOrThrowArgs): Promise<IntegrationData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationData.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
