import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneIntegrationDataOnProtosArgs } from "./args/UpdateOneIntegrationDataOnProtosArgs";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationDataOnProtos)
export class UpdateOneIntegrationDataOnProtosResolver {
  @TypeGraphQL.Mutation(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async updateOneIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
