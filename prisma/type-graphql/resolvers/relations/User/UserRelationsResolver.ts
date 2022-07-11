import * as TypeGraphQL from "type-graphql";
import { Proto } from "../../../models/Proto";
import { User } from "../../../models/User";
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
}
