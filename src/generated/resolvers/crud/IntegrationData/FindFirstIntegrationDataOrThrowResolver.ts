import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIntegrationDataOrThrowArgs } from "./args/FindFirstIntegrationDataOrThrowArgs";
import { IntegrationData } from "../../../models/IntegrationData";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationData)
export class FindFirstIntegrationDataOrThrowResolver {
  @TypeGraphQL.Query(_returns => IntegrationData, {
    nullable: true
  })
  async findFirstIntegrationDataOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIntegrationDataOrThrowArgs): Promise<IntegrationData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationData.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
