import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateManyUserInputEnvelope } from "../inputs/ProtoCreateManyUserInputEnvelope";
import { ProtoCreateOrConnectWithoutUserInput } from "../inputs/ProtoCreateOrConnectWithoutUserInput";
import { ProtoCreateWithoutUserInput } from "../inputs/ProtoCreateWithoutUserInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ProtoCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProtoCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProtoCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProtoCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProtoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput[] | undefined;
}
