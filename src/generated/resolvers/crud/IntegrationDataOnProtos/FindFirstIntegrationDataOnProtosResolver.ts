import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIntegrationDataOnProtosArgs } from "./args/FindFirstIntegrationDataOnProtosArgs";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationDataOnProtos)
export class FindFirstIntegrationDataOnProtosResolver {
  @TypeGraphQL.Query(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async findFirstIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
