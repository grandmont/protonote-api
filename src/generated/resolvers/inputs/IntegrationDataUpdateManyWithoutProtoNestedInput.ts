import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateManyProtoInputEnvelope } from "../inputs/IntegrationDataCreateManyProtoInputEnvelope";
import { IntegrationDataCreateOrConnectWithoutProtoInput } from "../inputs/IntegrationDataCreateOrConnectWithoutProtoInput";
import { IntegrationDataCreateWithoutProtoInput } from "../inputs/IntegrationDataCreateWithoutProtoInput";
import { IntegrationDataScalarWhereInput } from "../inputs/IntegrationDataScalarWhereInput";
import { IntegrationDataUpdateManyWithWhereWithoutProtoInput } from "../inputs/IntegrationDataUpdateManyWithWhereWithoutProtoInput";
import { IntegrationDataUpdateWithWhereUniqueWithoutProtoInput } from "../inputs/IntegrationDataUpdateWithWhereUniqueWithoutProtoInput";
import { IntegrationDataUpsertWithWhereUniqueWithoutProtoInput } from "../inputs/IntegrationDataUpsertWithWhereUniqueWithoutProtoInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataUpdateManyWithoutProtoNestedInput", {
  isAbstract: true
})
export class IntegrationDataUpdateManyWithoutProtoNestedInput {
  @TypeGraphQL.Field(_type => [IntegrationDataCreateWithoutProtoInput], {
    nullable: true
  })
  create?: IntegrationDataCreateWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataCreateOrConnectWithoutProtoInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationDataCreateOrConnectWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataUpsertWithWhereUniqueWithoutProtoInput], {
    nullable: true
  })
  upsert?: IntegrationDataUpsertWithWhereUniqueWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataCreateManyProtoInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationDataCreateManyProtoInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [IntegrationDataUpdateWithWhereUniqueWithoutProtoInput], {
    nullable: true
  })
  update?: IntegrationDataUpdateWithWhereUniqueWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataUpdateManyWithWhereWithoutProtoInput], {
    nullable: true
  })
  updateMany?: IntegrationDataUpdateManyWithWhereWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IntegrationDataScalarWhereInput[] | undefined;
}
