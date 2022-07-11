import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoUpdateManyMutationInput } from "../../../inputs/ProtoUpdateManyMutationInput";
import { ProtoWhereInput } from "../../../inputs/ProtoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProtoArgs {
  @TypeGraphQL.Field(_type => ProtoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProtoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProtoWhereInput, {
    nullable: true
  })
  where?: ProtoWhereInput | undefined;
}
