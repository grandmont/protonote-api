import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProtoPropArgs } from "./args/AggregateProtoPropArgs";
import { ProtoProp } from "../../../models/ProtoProp";
import { AggregateProtoProp } from "../../outputs/AggregateProtoProp";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProtoProp)
export class AggregateProtoPropResolver {
  @TypeGraphQL.Query(_returns => AggregateProtoProp, {
    nullable: false
  })
  async aggregateProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProtoPropArgs): Promise<AggregateProtoProp> {
    return getPrismaFromContext(ctx).protoProp.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
