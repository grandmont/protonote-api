import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProtoUpdateOneRequiredWithoutDeezerNestedInput } from "../inputs/ProtoUpdateOneRequiredWithoutDeezerNestedInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpdateWithoutDeezerDataInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpdateWithoutDeezerDataInput {
  @TypeGraphQL.Field(_type => ProtoUpdateOneRequiredWithoutDeezerNestedInput, {
    nullable: true
  })
  proto?: ProtoUpdateOneRequiredWithoutDeezerNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
