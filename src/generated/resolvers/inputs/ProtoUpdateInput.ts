import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntegrationDataUpdateManyWithoutProtoNestedInput } from "../inputs/IntegrationDataUpdateManyWithoutProtoNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProtosNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProtosNestedInput";

@TypeGraphQL.InputType("ProtoUpdateInput", {
  isAbstract: true
})
export class ProtoUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  dateString?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProtosNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutProtosNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataUpdateManyWithoutProtoNestedInput, {
    nullable: true
  })
  integrationData?: IntegrationDataUpdateManyWithoutProtoNestedInput | undefined;
}
