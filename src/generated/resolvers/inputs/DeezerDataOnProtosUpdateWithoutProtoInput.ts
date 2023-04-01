import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DeezerDataUpdateOneRequiredWithoutProtosNestedInput } from "../inputs/DeezerDataUpdateOneRequiredWithoutProtosNestedInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpdateWithoutProtoInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpdateWithoutProtoInput {
  @TypeGraphQL.Field(_type => DeezerDataUpdateOneRequiredWithoutProtosNestedInput, {
    nullable: true
  })
  deezerData?: DeezerDataUpdateOneRequiredWithoutProtosNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
