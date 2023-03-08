import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAuthProviderFieldUpdateOperationsInput } from "../inputs/EnumAuthProviderFieldUpdateOperationsInput";
import { IntegrationUpdateManyWithoutUserNestedInput } from "../inputs/IntegrationUpdateManyWithoutUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProtoUpdateManyWithoutUserNestedInput } from "../inputs/ProtoUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateInput", {
  isAbstract: true
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  picture?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumAuthProviderFieldUpdateOperationsInput, {
    nullable: true
  })
  provider?: EnumAuthProviderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  protos?: ProtoUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  integrations?: IntegrationUpdateManyWithoutUserNestedInput | undefined;
}
