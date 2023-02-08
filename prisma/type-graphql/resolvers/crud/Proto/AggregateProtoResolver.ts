import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProtoArgs } from "./args/AggregateProtoArgs";
import { Proto } from "../../../models/Proto";
import { AggregateProto } from "../../outputs/AggregateProto";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Proto)
export class AggregateProtoResolver {
  @TypeGraphQL.Query(_returns => AggregateProto, {
    nullable: false
  })
  async aggregateProto(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProtoArgs): Promise<AggregateProto> {
    return getPrismaFromContext(ctx).proto.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
