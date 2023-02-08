import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateManyUserInputEnvelope } from "../inputs/ProtoCreateManyUserInputEnvelope";
import { ProtoCreateOrConnectWithoutUserInput } from "../inputs/ProtoCreateOrConnectWithoutUserInput";
import { ProtoCreateWithoutUserInput } from "../inputs/ProtoCreateWithoutUserInput";
import { ProtoScalarWhereInput } from "../inputs/ProtoScalarWhereInput";
import { ProtoUpdateManyWithWhereWithoutUserInput } from "../inputs/ProtoUpdateManyWithWhereWithoutUserInput";
import { ProtoUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ProtoUpdateWithWhereUniqueWithoutUserInput";
import { ProtoUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ProtoUpsertWithWhereUniqueWithoutUserInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ProtoUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProtoCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProtoCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ProtoUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProtoCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProtoWhereUniqueInput], {
    nullable: true
  })
  set?: ProtoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProtoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoWhereUniqueInput], {
    nullable: true
  })
  delete?: ProtoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ProtoUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ProtoUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProtoScalarWhereInput[] | undefined;
}
