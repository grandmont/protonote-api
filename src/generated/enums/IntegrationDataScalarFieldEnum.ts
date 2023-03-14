import * as TypeGraphQL from "type-graphql";

export enum IntegrationDataScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  data = "data",
  integrationId = "integrationId",
  protoId = "protoId"
}
TypeGraphQL.registerEnumType(IntegrationDataScalarFieldEnum, {
  name: "IntegrationDataScalarFieldEnum",
  description: undefined,
});
