import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumIntegrationProviderFieldUpdateOperationsInput } from "../inputs/NullableEnumIntegrationProviderFieldUpdateOperationsInput";
import { NullableEnumIntegrationStatusFieldUpdateOperationsInput } from "../inputs/NullableEnumIntegrationStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutIntegrationsNestedInput } from "../inputs/UserUpdateOneWithoutIntegrationsNestedInput";

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

  @TypeGraphQL.Field(_type => NullableEnumIntegrationProviderFieldUpdateOperationsInput, {
    nullable: true
  })
  provider?: NullableEnumIntegrationProviderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumIntegrationStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: NullableEnumIntegrationStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  refreshToken?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutIntegrationsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutIntegrationsNestedInput | undefined;
}
