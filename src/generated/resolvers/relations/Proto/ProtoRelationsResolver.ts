import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeezerDataOnProtos } from "../../../models/DeezerDataOnProtos";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { Proto } from "../../../models/Proto";
import { User } from "../../../models/User";
import { ProtoDeezerArgs } from "./args/ProtoDeezerArgs";
import { ProtoIntegrationsArgs } from "./args/ProtoIntegrationsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Proto)
export class ProtoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() proto: Proto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).proto.findUnique({
      where: {
        id: proto.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [IntegrationDataOnProtos], {
    nullable: false
  })
  async integrations(@TypeGraphQL.Root() proto: Proto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ProtoIntegrationsArgs): Promise<IntegrationDataOnProtos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).proto.findUnique({
      where: {
        id: proto.id,
      },
    }).integrations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [DeezerDataOnProtos], {
    nullable: false
  })
  async deezer(@TypeGraphQL.Root() proto: Proto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ProtoDeezerArgs): Promise<DeezerDataOnProtos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).proto.findUnique({
      where: {
        id: proto.id,
      },
    }).deezer({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
