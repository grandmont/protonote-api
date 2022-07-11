import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProtoPropArgs } from "./args/FindUniqueProtoPropArgs";
import { ProtoProp } from "../../../models/ProtoProp";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProtoProp)
export class FindUniqueProtoPropResolver {
  @TypeGraphQL.Query(_returns => ProtoProp, {
    nullable: true
  })
  async protoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProtoPropArgs): Promise<ProtoProp | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
