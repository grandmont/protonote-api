import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropUpdateWithoutProtoInput } from "../inputs/ProtoPropUpdateWithoutProtoInput";
import { ProtoPropWhereUniqueInput } from "../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.InputType("ProtoPropUpdateWithWhereUniqueWithoutProtoInput", {
  isAbstract: true
})
export class ProtoPropUpdateWithWhereUniqueWithoutProtoInput {
  @TypeGraphQL.Field(_type => ProtoPropWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoPropWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoPropUpdateWithoutProtoInput, {
    nullable: false
  })
  data!: ProtoPropUpdateWithoutProtoInput;
}
