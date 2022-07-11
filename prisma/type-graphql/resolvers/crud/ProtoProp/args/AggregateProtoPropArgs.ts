import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropOrderByWithRelationInput } from "../../../inputs/ProtoPropOrderByWithRelationInput";
import { ProtoPropWhereInput } from "../../../inputs/ProtoPropWhereInput";
import { ProtoPropWhereUniqueInput } from "../../../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProtoPropArgs {
  @TypeGraphQL.Field(_type => ProtoPropWhereInput, {
    nullable: true
  })
  where?: ProtoPropWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProtoPropOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProtoPropWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProtoPropWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
