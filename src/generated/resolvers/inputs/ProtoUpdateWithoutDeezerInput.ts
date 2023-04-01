import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput } from "../inputs/IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutProtosNestedInput } from "../inputs/UserUpdateOneWithoutProtosNestedInput";

@TypeGraphQL.InputType("ProtoUpdateWithoutDeezerInput", {
  isAbstract: true
})
export class ProtoUpdateWithoutDeezerInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutProtosNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutProtosNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput, {
    nullable: true
  })
  integrations?: IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput | undefined;
}
