import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationProvider } from "../../enums/IntegrationProvider";

@TypeGraphQL.InputType("NullableEnumIntegrationProviderFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumIntegrationProviderFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => IntegrationProvider, {
    nullable: true
  })
  set?: "SPOTIFY" | undefined;
}
