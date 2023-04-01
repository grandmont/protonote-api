import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDeezerDataOnProtosArgs } from "./args/AggregateDeezerDataOnProtosArgs";
import { DeezerDataOnProtos } from "../../../models/DeezerDataOnProtos";
import { AggregateDeezerDataOnProtos } from "../../outputs/AggregateDeezerDataOnProtos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeezerDataOnProtos)
export class AggregateDeezerDataOnProtosResolver {
  @TypeGraphQL.Query(_returns => AggregateDeezerDataOnProtos, {
    nullable: false
  })
  async aggregateDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeezerDataOnProtosArgs): Promise<AggregateDeezerDataOnProtos> {
    return getPrismaFromContext(ctx).deezerDataOnProtos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
