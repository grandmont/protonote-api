import * as TypeGraphQL from "type-graphql";

export enum IntegrationStatus {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED"
}
TypeGraphQL.registerEnumType(IntegrationStatus, {
  name: "IntegrationStatus",
  description: undefined,
});
