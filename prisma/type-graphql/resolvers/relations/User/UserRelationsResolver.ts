import * as TypeGraphQL from "type-graphql";
import { Integration } from "../../../models/Integration";
import { Proto } from "../../../models/Proto";
import { User } from "../../../models/User";
import { UserIntegrationsArgs } from "./args/UserIntegrationsArgs";
import { UserProtosArgs } from "./args/UserProtosArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Proto], {
    nullable: false
  })
  async protos(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProtosArgs): Promise<Proto[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).protos(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Integration], {
    nullable: false
  })
  async integrations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserIntegrationsArgs): Promise<Integration[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).integrations(args);
  }
}
