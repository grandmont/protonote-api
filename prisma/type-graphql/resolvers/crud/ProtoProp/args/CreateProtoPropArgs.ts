import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropCreateInput } from "../../../inputs/ProtoPropCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProtoPropArgs {
  @TypeGraphQL.Field(_type => ProtoPropCreateInput, {
    nullable: false
  })
  data!: ProtoPropCreateInput;
}
