import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropUpdateInput } from "../../../inputs/ProtoPropUpdateInput";
import { ProtoPropWhereUniqueInput } from "../../../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProtoPropArgs {
  @TypeGraphQL.Field(_type => ProtoPropUpdateInput, {
    nullable: false
  })
  data!: ProtoPropUpdateInput;

  @TypeGraphQL.Field(_type => ProtoPropWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoPropWhereUniqueInput;
}
