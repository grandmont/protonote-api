import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDeezerDataOnProtosArgs } from "./args/FindUniqueDeezerDataOnProtosArgs";
import { DeezerDataOnProtos } from "../../../models/DeezerDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerDataOnProtos)
export class FindUniqueDeezerDataOnProtosResolver {
  @TypeGraphQL.Query(_returns => DeezerDataOnProtos, {
    nullable: true
  })
  async findUniqueDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDeezerDataOnProtosArgs): Promise<DeezerDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
