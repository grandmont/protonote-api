import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeezerData } from "../../../models/DeezerData";
import { DeezerDataOnProtos } from "../../../models/DeezerDataOnProtos";
import { DeezerDataProtosArgs } from "./args/DeezerDataProtosArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerData)
export class DeezerDataRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [DeezerDataOnProtos], {
    nullable: false
  })
  async protos(@TypeGraphQL.Root() deezerData: DeezerData, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeezerDataProtosArgs): Promise<DeezerDataOnProtos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.findUnique({
      where: {
        id: deezerData.id,
      },
    }).protos({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
