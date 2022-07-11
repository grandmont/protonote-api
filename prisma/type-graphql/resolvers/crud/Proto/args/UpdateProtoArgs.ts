import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoUpdateInput } from "../../../inputs/ProtoUpdateInput";
import { ProtoWhereUniqueInput } from "../../../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProtoArgs {
  @TypeGraphQL.Field(_type => ProtoUpdateInput, {
    nullable: false
  })
  data!: ProtoUpdateInput;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;
}
