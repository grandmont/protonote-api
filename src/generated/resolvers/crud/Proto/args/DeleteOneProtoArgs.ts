import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoWhereUniqueInput } from "../../../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProtoArgs {
  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;
}
