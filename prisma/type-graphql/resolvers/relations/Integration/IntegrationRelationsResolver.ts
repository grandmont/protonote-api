import * as TypeGraphQL from "type-graphql";
import { Integration } from "../../../models/Integration";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Integration)
export class IntegrationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() integration: Integration, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).integration.findUnique({
      where: {
        id: integration.id,
      },
    }).user({});
  }
}
