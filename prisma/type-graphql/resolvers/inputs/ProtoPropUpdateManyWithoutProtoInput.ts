import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropCreateManyProtoInputEnvelope } from "../inputs/ProtoPropCreateManyProtoInputEnvelope";
import { ProtoPropCreateOrConnectWithoutProtoInput } from "../inputs/ProtoPropCreateOrConnectWithoutProtoInput";
import { ProtoPropCreateWithoutProtoInput } from "../inputs/ProtoPropCreateWithoutProtoInput";
import { ProtoPropScalarWhereInput } from "../inputs/ProtoPropScalarWhereInput";
import { ProtoPropUpdateManyWithWhereWithoutProtoInput } from "../inputs/ProtoPropUpdateManyWithWhereWithoutProtoInput";
import { ProtoPropUpdateWithWhereUniqueWithoutProtoInput } from "../inputs/ProtoPropUpdateWithWhereUniqueWithoutProtoInput";
import { ProtoPropUpsertWithWhereUniqueWithoutProtoInput } from "../inputs/ProtoPropUpsertWithWhereUniqueWithoutProtoInput";
import { ProtoPropWhereUniqueInput } from "../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.InputType("ProtoPropUpdateManyWithoutProtoInput", {
  isAbstract: true
})
export class ProtoPropUpdateManyWithoutProtoInput {
  @TypeGraphQL.Field(_type => [ProtoPropCreateWithoutProtoInput], {
    nullable: true
  })
  create?: ProtoPropCreateWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropCreateOrConnectWithoutProtoInput], {
    nullable: true
  })
  connectOrCreate?: ProtoPropCreateOrConnectWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropUpsertWithWhereUniqueWithoutProtoInput], {
    nullable: true
  })
  upsert?: ProtoPropUpsertWithWhereUniqueWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => ProtoPropCreateManyProtoInputEnvelope, {
    nullable: true
  })
  createMany?: ProtoPropCreateManyProtoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropWhereUniqueInput], {
    nullable: true
  })
  set?: ProtoPropWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProtoPropWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropWhereUniqueInput], {
    nullable: true
  })
  delete?: ProtoPropWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropWhereUniqueInput], {
    nullable: true
  })
  connect?: ProtoPropWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropUpdateWithWhereUniqueWithoutProtoInput], {
    nullable: true
  })
  update?: ProtoPropUpdateWithWhereUniqueWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropUpdateManyWithWhereWithoutProtoInput], {
    nullable: true
  })
  updateMany?: ProtoPropUpdateManyWithWhereWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProtoPropScalarWhereInput[] | undefined;
}
