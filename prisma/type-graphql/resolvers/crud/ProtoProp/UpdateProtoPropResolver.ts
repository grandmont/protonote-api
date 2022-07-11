import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateProtoPropArgs } from "./args/UpdateProtoPropArgs";
import { ProtoProp } from "../../../models/ProtoProp";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProtoProp)
export class UpdateProtoPropResolver {
  @TypeGraphQL.Mutation(_returns => ProtoProp, {
    nullable: true
  })
  async updateProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProtoPropArgs): Promise<ProtoProp | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
