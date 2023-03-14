import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneIntegrationDataArgs } from "./args/UpdateOneIntegrationDataArgs";
import { IntegrationData } from "../../../models/IntegrationData";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationData)
export class UpdateOneIntegrationDataResolver {
  @TypeGraphQL.Mutation(_returns => IntegrationData, {
    nullable: true
  })
  async updateOneIntegrationData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneIntegrationDataArgs): Promise<IntegrationData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationData.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
