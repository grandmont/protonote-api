import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateManyProtoInputEnvelope } from "../inputs/DeezerDataOnProtosCreateManyProtoInputEnvelope";
import { DeezerDataOnProtosCreateOrConnectWithoutProtoInput } from "../inputs/DeezerDataOnProtosCreateOrConnectWithoutProtoInput";
import { DeezerDataOnProtosCreateWithoutProtoInput } from "../inputs/DeezerDataOnProtosCreateWithoutProtoInput";
import { DeezerDataOnProtosScalarWhereInput } from "../inputs/DeezerDataOnProtosScalarWhereInput";
import { DeezerDataOnProtosUpdateManyWithWhereWithoutProtoInput } from "../inputs/DeezerDataOnProtosUpdateManyWithWhereWithoutProtoInput";
import { DeezerDataOnProtosUpdateWithWhereUniqueWithoutProtoInput } from "../inputs/DeezerDataOnProtosUpdateWithWhereUniqueWithoutProtoInput";
import { DeezerDataOnProtosUpsertWithWhereUniqueWithoutProtoInput } from "../inputs/DeezerDataOnProtosUpsertWithWhereUniqueWithoutProtoInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpdateManyWithoutProtoNestedInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpdateManyWithoutProtoNestedInput {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateWithoutProtoInput], {
    nullable: true
  })
  create?: DeezerDataOnProtosCreateWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateOrConnectWithoutProtoInput], {
    nullable: true
  })
  connectOrCreate?: DeezerDataOnProtosCreateOrConnectWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosUpsertWithWhereUniqueWithoutProtoInput], {
    nullable: true
  })
  upsert?: DeezerDataOnProtosUpsertWithWhereUniqueWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateManyProtoInputEnvelope, {
    nullable: true
  })
  createMany?: DeezerDataOnProtosCreateManyProtoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  set?: DeezerDataOnProtosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DeezerDataOnProtosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  delete?: DeezerDataOnProtosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  connect?: DeezerDataOnProtosWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosUpdateWithWhereUniqueWithoutProtoInput], {
    nullable: true
  })
  update?: DeezerDataOnProtosUpdateWithWhereUniqueWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosUpdateManyWithWhereWithoutProtoInput], {
    nullable: true
  })
  updateMany?: DeezerDataOnProtosUpdateManyWithWhereWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DeezerDataOnProtosScalarWhereInput[] | undefined;
}
