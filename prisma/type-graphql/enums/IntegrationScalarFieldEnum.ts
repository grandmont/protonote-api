import * as TypeGraphQL from "type-graphql";

export enum IntegrationScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  externalId = "externalId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(IntegrationScalarFieldEnum, {
  name: "IntegrationScalarFieldEnum",
  description: undefined,
});
