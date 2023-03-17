import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumIntegrationProviderFieldUpdateOperationsInput } from "../inputs/NullableEnumIntegrationProviderFieldUpdateOperationsInput";
import { NullableEnumIntegrationStatusFieldUpdateOperationsInput } from "../inputs/NullableEnumIntegrationStatusFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutIntegrationsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutIntegrationsNestedInput";

@TypeGraphQL.InputType("IntegrationUpdateInput", {
  isAbstract: true
})
export class IntegrationUpdateInput {
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
  externalId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumIntegrationProviderFieldUpdateOperationsInput, {
    nullable: true
  })
  provider?: NullableEnumIntegrationProviderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumIntegrationStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: NullableEnumIntegrationStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutIntegrationsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutIntegrationsNestedInput | undefined;
}
