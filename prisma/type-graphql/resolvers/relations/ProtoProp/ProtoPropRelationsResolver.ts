import * as TypeGraphQL from "type-graphql";
import { Proto } from "../../../models/Proto";
import { ProtoProp } from "../../../models/ProtoProp";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProtoProp)
export class ProtoPropRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Proto, {
    nullable: false
  })
  async proto(@TypeGraphQL.Root() protoProp: ProtoProp, @TypeGraphQL.Ctx() ctx: any): Promise<Proto> {
    return getPrismaFromContext(ctx).protoProp.findUnique({
      where: {
        id: protoProp.id,
      },
    }).proto({});
  }
}
