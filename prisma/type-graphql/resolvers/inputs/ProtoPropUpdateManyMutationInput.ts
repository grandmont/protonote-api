import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumProtoPropTypeFieldUpdateOperationsInput } from "../inputs/EnumProtoPropTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProtoPropUpdateManyMutationInput", {
  isAbstract: true
})
export class ProtoPropUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumProtoPropTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumProtoPropTypeFieldUpdateOperationsInput | undefined;
}
