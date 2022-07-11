import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropCreateManyProtoInputEnvelope } from "../inputs/ProtoPropCreateManyProtoInputEnvelope";
import { ProtoPropCreateOrConnectWithoutProtoInput } from "../inputs/ProtoPropCreateOrConnectWithoutProtoInput";
import { ProtoPropCreateWithoutProtoInput } from "../inputs/ProtoPropCreateWithoutProtoInput";
import { ProtoPropWhereUniqueInput } from "../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.InputType("ProtoPropCreateNestedManyWithoutProtoInput", {
  isAbstract: true
})
export class ProtoPropCreateNestedManyWithoutProtoInput {
  @TypeGraphQL.Field(_type => [ProtoPropCreateWithoutProtoInput], {
    nullable: true
  })
  create?: ProtoPropCreateWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropCreateOrConnectWithoutProtoInput], {
    nullable: true
  })
  connectOrCreate?: ProtoPropCreateOrConnectWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => ProtoPropCreateManyProtoInputEnvelope, {
    nullable: true
  })
  createMany?: ProtoPropCreateManyProtoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropWhereUniqueInput], {
    nullable: true
  })
  connect?: ProtoPropWhereUniqueInput[] | undefined;
}
