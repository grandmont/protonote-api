import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropEnum } from "../../enums/ProtoPropEnum";

@TypeGraphQL.InputType("EnumProtoPropEnumFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumProtoPropEnumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ProtoPropEnum, {
    nullable: true
  })
  set?: "DESCRIPTION" | "LIKERT" | undefined;
}
