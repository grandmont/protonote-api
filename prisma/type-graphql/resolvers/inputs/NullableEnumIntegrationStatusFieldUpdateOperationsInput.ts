import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationStatus } from "../../enums/IntegrationStatus";

@TypeGraphQL.InputType("NullableEnumIntegrationStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumIntegrationStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => IntegrationStatus, {
    nullable: true
  })
  set?: "CONNECTED" | "DISCONNECTED" | undefined;
}
