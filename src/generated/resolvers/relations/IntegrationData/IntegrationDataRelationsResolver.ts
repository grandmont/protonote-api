import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { IntegrationData } from "../../../models/IntegrationData";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { IntegrationDataProtosArgs } from "./args/IntegrationDataProtosArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IntegrationData)
export class IntegrationDataRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [IntegrationDataOnProtos], {
    nullable: false
  })
  async protos(@TypeGraphQL.Root() integrationData: IntegrationData, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: IntegrationDataProtosArgs): Promise<IntegrationDataOnProtos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationData.findUnique({
      where: {
        id: integrationData.id,
      },
    }).protos({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
