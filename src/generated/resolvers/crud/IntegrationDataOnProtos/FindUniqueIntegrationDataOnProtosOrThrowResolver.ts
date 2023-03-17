import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIntegrationDataOnProtosOrThrowArgs } from "./args/FindUniqueIntegrationDataOnProtosOrThrowArgs";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationDataOnProtos)
export class FindUniqueIntegrationDataOnProtosOrThrowResolver {
  @TypeGraphQL.Query(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async findUniqueIntegrationDataOnProtosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIntegrationDataOnProtosOrThrowArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
