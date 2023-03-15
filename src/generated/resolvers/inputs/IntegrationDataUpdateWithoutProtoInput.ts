import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntegrationUpdateOneRequiredWithoutIntegrationDataNestedInput } from "../inputs/IntegrationUpdateOneRequiredWithoutIntegrationDataNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IntegrationDataUpdateWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataUpdateWithoutProtoInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  search?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  data?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpdateOneRequiredWithoutIntegrationDataNestedInput, {
    nullable: true
  })
  integration?: IntegrationUpdateOneRequiredWithoutIntegrationDataNestedInput | undefined;
}
