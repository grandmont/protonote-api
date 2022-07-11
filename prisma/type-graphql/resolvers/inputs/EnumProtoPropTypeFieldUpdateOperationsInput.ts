import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropType } from "../../enums/ProtoPropType";

@TypeGraphQL.InputType("EnumProtoPropTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumProtoPropTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ProtoPropType, {
    nullable: true
  })
  set?: "DESCRIPTION" | "LIKERT" | undefined;
}
