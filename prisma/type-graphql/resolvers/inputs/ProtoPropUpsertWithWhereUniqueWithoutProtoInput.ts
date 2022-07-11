import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropCreateWithoutProtoInput } from "../inputs/ProtoPropCreateWithoutProtoInput";
import { ProtoPropUpdateWithoutProtoInput } from "../inputs/ProtoPropUpdateWithoutProtoInput";
import { ProtoPropWhereUniqueInput } from "../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.InputType("ProtoPropUpsertWithWhereUniqueWithoutProtoInput", {
  isAbstract: true
})
export class ProtoPropUpsertWithWhereUniqueWithoutProtoInput {
  @TypeGraphQL.Field(_type => ProtoPropWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoPropWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoPropUpdateWithoutProtoInput, {
    nullable: false
  })
  update!: ProtoPropUpdateWithoutProtoInput;

  @TypeGraphQL.Field(_type => ProtoPropCreateWithoutProtoInput, {
    nullable: false
  })
  create!: ProtoPropCreateWithoutProtoInput;
}
