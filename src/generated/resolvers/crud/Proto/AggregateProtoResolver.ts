import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProtoArgs } from "./args/AggregateProtoArgs";
import { Proto } from "../../../models/Proto";
import { AggregateProto } from "../../outputs/AggregateProto";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Proto)
export class AggregateProtoResolver {
  @TypeGraphQL.Query(_returns => AggregateProto, {
    nullable: false
  })
  async aggregateProto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProtoArgs): Promise<AggregateProto> {
    return getPrismaFromContext(ctx).proto.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
