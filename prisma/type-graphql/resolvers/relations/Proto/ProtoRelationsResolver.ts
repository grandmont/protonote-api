import * as TypeGraphQL from "type-graphql";
import { Proto } from "../../../models/Proto";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Proto)
export class ProtoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() proto: Proto, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).proto.findUnique({
      where: {
        id: proto.id,
      },
    }).user({});
  }
}
