import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope } from "../inputs/IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope";
import { IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput";
import { IntegrationDataOnProtosCreateWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosCreateWithoutIntegrationDataInput";
import { IntegrationDataOnProtosScalarWhereInput } from "../inputs/IntegrationDataOnProtosScalarWhereInput";
import { IntegrationDataOnProtosUpdateManyWithWhereWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosUpdateManyWithWhereWithoutIntegrationDataInput";
import { IntegrationDataOnProtosUpdateWithWhereUniqueWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosUpdateWithWhereUniqueWithoutIntegrationDataInput";
import { IntegrationDataOnProtosUpsertWithWhereUniqueWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosUpsertWithWhereUniqueWithoutIntegrationDataInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosUpdateManyWithoutIntegrationDataNestedInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosUpdateManyWithoutIntegrationDataNestedInput {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateWithoutIntegrationDataInput], {
    nullable: true
  })
  create?: IntegrationDataOnProtosCreateWithoutIntegrationDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosUpsertWithWhereUniqueWithoutIntegrationDataInput], {
    nullable: true
  })
  upsert?: IntegrationDataOnProtosUpsertWithWhereUniqueWithoutIntegrationDataInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  set?: IntegrationDataOnProtosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IntegrationDataOnProtosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  delete?: IntegrationDataOnProtosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  connect?: IntegrationDataOnProtosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosUpdateWithWhereUniqueWithoutIntegrationDataInput], {
    nullable: true
  })
  update?: IntegrationDataOnProtosUpdateWithWhereUniqueWithoutIntegrationDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosUpdateManyWithWhereWithoutIntegrationDataInput], {
    nullable: true
  })
  updateMany?: IntegrationDataOnProtosUpdateManyWithWhereWithoutIntegrationDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IntegrationDataOnProtosScalarWhereInput[] | undefined;
}
