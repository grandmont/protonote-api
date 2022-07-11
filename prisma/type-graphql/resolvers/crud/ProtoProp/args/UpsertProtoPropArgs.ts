import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropCreateInput } from "../../../inputs/ProtoPropCreateInput";
import { ProtoPropUpdateInput } from "../../../inputs/ProtoPropUpdateInput";
import { ProtoPropWhereUniqueInput } from "../../../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProtoPropArgs {
  @TypeGraphQL.Field(_type => ProtoPropWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoPropWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoPropCreateInput, {
    nullable: false
  })
  create!: ProtoPropCreateInput;

  @TypeGraphQL.Field(_type => ProtoPropUpdateInput, {
    nullable: false
  })
  update!: ProtoPropUpdateInput;
}
