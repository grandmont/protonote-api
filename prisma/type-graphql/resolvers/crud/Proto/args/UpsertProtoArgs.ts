import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoCreateInput } from "../../../inputs/ProtoCreateInput";
import { ProtoUpdateInput } from "../../../inputs/ProtoUpdateInput";
import { ProtoWhereUniqueInput } from "../../../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProtoArgs {
  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoCreateInput, {
    nullable: false
  })
  create!: ProtoCreateInput;

  @TypeGraphQL.Field(_type => ProtoUpdateInput, {
    nullable: false
  })
  update!: ProtoUpdateInput;
}
