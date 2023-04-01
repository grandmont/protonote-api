import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateManyDeezerDataInputEnvelope } from "../inputs/DeezerDataOnProtosCreateManyDeezerDataInputEnvelope";
import { DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput";
import { DeezerDataOnProtosCreateWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosCreateWithoutDeezerDataInput";
import { DeezerDataOnProtosScalarWhereInput } from "../inputs/DeezerDataOnProtosScalarWhereInput";
import { DeezerDataOnProtosUpdateManyWithWhereWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosUpdateManyWithWhereWithoutDeezerDataInput";
import { DeezerDataOnProtosUpdateWithWhereUniqueWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosUpdateWithWhereUniqueWithoutDeezerDataInput";
import { DeezerDataOnProtosUpsertWithWhereUniqueWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosUpsertWithWhereUniqueWithoutDeezerDataInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpdateManyWithoutDeezerDataNestedInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpdateManyWithoutDeezerDataNestedInput {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateWithoutDeezerDataInput], {
    nullable: true
  })
  create?: DeezerDataOnProtosCreateWithoutDeezerDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput], {
    nullable: true
  })
  connectOrCreate?: DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosUpsertWithWhereUniqueWithoutDeezerDataInput], {
    nullable: true
  })
  upsert?: DeezerDataOnProtosUpsertWithWhereUniqueWithoutDeezerDataInput[] | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateManyDeezerDataInputEnvelope, {
    nullable: true
  })
  createMany?: DeezerDataOnProtosCreateManyDeezerDataInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosUpdateWithWhereUniqueWithoutDeezerDataInput], {
    nullable: true
  })
  update?: DeezerDataOnProtosUpdateWithWhereUniqueWithoutDeezerDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosUpdateManyWithWhereWithoutDeezerDataInput], {
    nullable: true
  })
  updateMany?: DeezerDataOnProtosUpdateManyWithWhereWithoutDeezerDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DeezerDataOnProtosScalarWhereInput[] | undefined;
}
