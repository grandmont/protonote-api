import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateManyProtoInputEnvelope } from "../inputs/IntegrationDataOnProtosCreateManyProtoInputEnvelope";
import { IntegrationDataOnProtosCreateOrConnectWithoutProtoInput } from "../inputs/IntegrationDataOnProtosCreateOrConnectWithoutProtoInput";
import { IntegrationDataOnProtosCreateWithoutProtoInput } from "../inputs/IntegrationDataOnProtosCreateWithoutProtoInput";
import { IntegrationDataOnProtosScalarWhereInput } from "../inputs/IntegrationDataOnProtosScalarWhereInput";
import { IntegrationDataOnProtosUpdateManyWithWhereWithoutProtoInput } from "../inputs/IntegrationDataOnProtosUpdateManyWithWhereWithoutProtoInput";
import { IntegrationDataOnProtosUpdateWithWhereUniqueWithoutProtoInput } from "../inputs/IntegrationDataOnProtosUpdateWithWhereUniqueWithoutProtoInput";
import { IntegrationDataOnProtosUpsertWithWhereUniqueWithoutProtoInput } from "../inputs/IntegrationDataOnProtosUpsertWithWhereUniqueWithoutProtoInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateWithoutProtoInput], {
    nullable: true
  })
  create?: IntegrationDataOnProtosCreateWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateOrConnectWithoutProtoInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationDataOnProtosCreateOrConnectWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosUpsertWithWhereUniqueWithoutProtoInput], {
    nullable: true
  })
  upsert?: IntegrationDataOnProtosUpsertWithWhereUniqueWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateManyProtoInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationDataOnProtosCreateManyProtoInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosUpdateWithWhereUniqueWithoutProtoInput], {
    nullable: true
  })
  update?: IntegrationDataOnProtosUpdateWithWhereUniqueWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosUpdateManyWithWhereWithoutProtoInput], {
    nullable: true
  })
  updateMany?: IntegrationDataOnProtosUpdateManyWithWhereWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IntegrationDataOnProtosScalarWhereInput[] | undefined;
}
