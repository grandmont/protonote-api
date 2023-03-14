import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateManyIntegrationInputEnvelope } from "../inputs/IntegrationDataCreateManyIntegrationInputEnvelope";
import { IntegrationDataCreateOrConnectWithoutIntegrationInput } from "../inputs/IntegrationDataCreateOrConnectWithoutIntegrationInput";
import { IntegrationDataCreateWithoutIntegrationInput } from "../inputs/IntegrationDataCreateWithoutIntegrationInput";
import { IntegrationDataScalarWhereInput } from "../inputs/IntegrationDataScalarWhereInput";
import { IntegrationDataUpdateManyWithWhereWithoutIntegrationInput } from "../inputs/IntegrationDataUpdateManyWithWhereWithoutIntegrationInput";
import { IntegrationDataUpdateWithWhereUniqueWithoutIntegrationInput } from "../inputs/IntegrationDataUpdateWithWhereUniqueWithoutIntegrationInput";
import { IntegrationDataUpsertWithWhereUniqueWithoutIntegrationInput } from "../inputs/IntegrationDataUpsertWithWhereUniqueWithoutIntegrationInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataUpdateManyWithoutIntegrationNestedInput", {
  isAbstract: true
})
export class IntegrationDataUpdateManyWithoutIntegrationNestedInput {
  @TypeGraphQL.Field(_type => [IntegrationDataCreateWithoutIntegrationInput], {
    nullable: true
  })
  create?: IntegrationDataCreateWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataCreateOrConnectWithoutIntegrationInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationDataCreateOrConnectWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataUpsertWithWhereUniqueWithoutIntegrationInput], {
    nullable: true
  })
  upsert?: IntegrationDataUpsertWithWhereUniqueWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataCreateManyIntegrationInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationDataCreateManyIntegrationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataWhereUniqueInput], {
    nullable: true
  })
  set?: IntegrationDataWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IntegrationDataWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataWhereUniqueInput], {
    nullable: true
  })
  delete?: IntegrationDataWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataWhereUniqueInput], {
    nullable: true
  })
  connect?: IntegrationDataWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataUpdateWithWhereUniqueWithoutIntegrationInput], {
    nullable: true
  })
  update?: IntegrationDataUpdateWithWhereUniqueWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataUpdateManyWithWhereWithoutIntegrationInput], {
    nullable: true
  })
  updateMany?: IntegrationDataUpdateManyWithWhereWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IntegrationDataScalarWhereInput[] | undefined;
}
