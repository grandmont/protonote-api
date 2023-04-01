import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeezerData } from "../../../models/DeezerData";
import { DeezerDataOnProtos } from "../../../models/DeezerDataOnProtos";
import { Proto } from "../../../models/Proto";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerDataOnProtos)
export class DeezerDataOnProtosRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Proto, {
    nullable: false
  })
  async proto(@TypeGraphQL.Root() deezerDataOnProtos: DeezerDataOnProtos, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Proto> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.findUnique({
      where: {
        protoId_deezerDataId: {
          protoId: deezerDataOnProtos.protoId,
          deezerDataId: deezerDataOnProtos.deezerDataId,
        },
      },
    }).proto({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => DeezerData, {
    nullable: false
  })
  async deezerData(@TypeGraphQL.Root() deezerDataOnProtos: DeezerDataOnProtos, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<DeezerData> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.findUnique({
      where: {
        protoId_deezerDataId: {
          protoId: deezerDataOnProtos.protoId,
          deezerDataId: deezerDataOnProtos.deezerDataId,
        },
      },
    }).deezerData({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
