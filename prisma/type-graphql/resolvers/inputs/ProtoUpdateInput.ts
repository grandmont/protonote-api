import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProtoPropUpdateManyWithoutProtoInput } from "../inputs/ProtoPropUpdateManyWithoutProtoInput";
import { UserUpdateOneRequiredWithoutProtosInput } from "../inputs/UserUpdateOneRequiredWithoutProtosInput";

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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProtosInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => ProtoPropUpdateManyWithoutProtoInput, {
    nullable: true
  })
  props?: ProtoPropUpdateManyWithoutProtoInput | undefined;
}
