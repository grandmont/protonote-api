import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntegrationDataUpdateOneRequiredWithoutProtosNestedInput } from "../inputs/IntegrationDataUpdateOneRequiredWithoutProtosNestedInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosUpdateWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosUpdateWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataUpdateOneRequiredWithoutProtosNestedInput, {
    nullable: true
  })
  integrationData?: IntegrationDataUpdateOneRequiredWithoutProtosNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
