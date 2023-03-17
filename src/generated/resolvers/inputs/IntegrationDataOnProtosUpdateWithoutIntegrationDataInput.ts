import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProtoUpdateOneRequiredWithoutIntegrationsNestedInput } from "../inputs/ProtoUpdateOneRequiredWithoutIntegrationsNestedInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosUpdateWithoutIntegrationDataInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosUpdateWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => ProtoUpdateOneRequiredWithoutIntegrationsNestedInput, {
    nullable: true
  })
  proto?: ProtoUpdateOneRequiredWithoutIntegrationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
