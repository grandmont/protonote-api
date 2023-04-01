import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneDeezerDataOnProtosArgs } from "./args/UpsertOneDeezerDataOnProtosArgs";
import { DeezerDataOnProtos } from "../../../models/DeezerDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerDataOnProtos)
export class UpsertOneDeezerDataOnProtosResolver {
  @TypeGraphQL.Mutation(_returns => DeezerDataOnProtos, {
    nullable: false
  })
  async upsertOneDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneDeezerDataOnProtosArgs): Promise<DeezerDataOnProtos> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
