import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateManyUserInputEnvelope } from "../inputs/IntegrationCreateManyUserInputEnvelope";
import { IntegrationCreateOrConnectWithoutUserInput } from "../inputs/IntegrationCreateOrConnectWithoutUserInput";
import { IntegrationCreateWithoutUserInput } from "../inputs/IntegrationCreateWithoutUserInput";
import { IntegrationScalarWhereInput } from "../inputs/IntegrationScalarWhereInput";
import { IntegrationUpdateManyWithWhereWithoutUserInput } from "../inputs/IntegrationUpdateManyWithWhereWithoutUserInput";
import { IntegrationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/IntegrationUpdateWithWhereUniqueWithoutUserInput";
import { IntegrationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/IntegrationUpsertWithWhereUniqueWithoutUserInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class IntegrationUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [IntegrationCreateWithoutUserInput], {
    nullable: true
  })
  create?: IntegrationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: IntegrationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IntegrationWhereUniqueInput], {
    nullable: true
  })
  set?: IntegrationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IntegrationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationWhereUniqueInput], {
    nullable: true
  })
  delete?: IntegrationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationWhereUniqueInput], {
    nullable: true
  })
  connect?: IntegrationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: IntegrationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: IntegrationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IntegrationScalarWhereInput[] | undefined;
}
