import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoCreateInput } from "../../../inputs/ProtoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProtoArgs {
  @TypeGraphQL.Field(_type => ProtoCreateInput, {
    nullable: false
  })
  data!: ProtoCreateInput;
}
