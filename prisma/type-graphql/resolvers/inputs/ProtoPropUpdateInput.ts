import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumProtoPropEnumFieldUpdateOperationsInput } from "../inputs/EnumProtoPropEnumFieldUpdateOperationsInput";
import { ProtoUpdateOneRequiredWithoutPropsInput } from "../inputs/ProtoUpdateOneRequiredWithoutPropsInput";

@TypeGraphQL.InputType("ProtoPropUpdateInput", {
  isAbstract: true
})
export class ProtoPropUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  value?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => EnumProtoPropEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumProtoPropEnumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpdateOneRequiredWithoutPropsInput, {
    nullable: true
  })
  proto?: ProtoUpdateOneRequiredWithoutPropsInput | undefined;
}
