import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { IntegrationData } from "../../../models/IntegrationData";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { Proto } from "../../../models/Proto";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationDataOnProtos)
export class IntegrationDataOnProtosRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Proto, {
    nullable: false
  })
  async proto(@TypeGraphQL.Root() integrationDataOnProtos: IntegrationDataOnProtos, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Proto> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findUnique({
      where: {
        protoId_integrationDataId: {
          protoId: integrationDataOnProtos.protoId,
          integrationDataId: integrationDataOnProtos.integrationDataId,
        },
      },
    }).proto({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => IntegrationData, {
    nullable: false
  })
  async integrationData(@TypeGraphQL.Root() integrationDataOnProtos: IntegrationDataOnProtos, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<IntegrationData> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findUnique({
      where: {
        protoId_integrationDataId: {
          protoId: integrationDataOnProtos.protoId,
          integrationDataId: integrationDataOnProtos.integrationDataId,
        },
      },
    }).integrationData({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
