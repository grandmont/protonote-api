import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Integration } from "../../../models/Integration";
import { IntegrationData } from "../../../models/IntegrationData";
import { Proto } from "../../../models/Proto";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationData)
export class IntegrationDataRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Integration, {
    nullable: false
  })
  async integration(@TypeGraphQL.Root() integrationData: IntegrationData, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Integration> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationData.findUnique({
      where: {
        id: integrationData.id,
      },
    }).integration({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Proto, {
    nullable: false
  })
  async proto(@TypeGraphQL.Root() integrationData: IntegrationData, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Proto> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationData.findUnique({
      where: {
        id: integrationData.id,
      },
    }).proto({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
