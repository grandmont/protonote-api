import * as TypeGraphQL from "type-graphql";
import { Proto } from "../../../models/Proto";
import { ProtoProp } from "../../../models/ProtoProp";
import { User } from "../../../models/User";
import { ProtoPropsArgs } from "./args/ProtoPropsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [ProtoProp], {
    nullable: false
  })
  async props(@TypeGraphQL.Root() proto: Proto, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProtoPropsArgs): Promise<ProtoProp[]> {
    return getPrismaFromContext(ctx).proto.findUnique({
      where: {
        id: proto.id,
      },
    }).props(args);
  }
}
