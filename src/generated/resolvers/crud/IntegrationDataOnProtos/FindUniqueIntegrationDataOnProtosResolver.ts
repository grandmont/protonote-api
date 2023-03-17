import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIntegrationDataOnProtosArgs } from "./args/FindUniqueIntegrationDataOnProtosArgs";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationDataOnProtos)
export class FindUniqueIntegrationDataOnProtosResolver {
  @TypeGraphQL.Query(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async findUniqueIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
