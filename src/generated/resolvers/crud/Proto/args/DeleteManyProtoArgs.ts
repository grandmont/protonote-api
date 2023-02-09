import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoWhereInput } from "../../../inputs/ProtoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProtoArgs {
  @TypeGraphQL.Field(_type => ProtoWhereInput, {
    nullable: true
  })
  where?: ProtoWhereInput | undefined;
}
