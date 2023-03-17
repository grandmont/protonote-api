import * as TypeGraphQL from "type-graphql";

export enum IntegrationDataScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  externalId = "externalId",
  search = "search",
  data = "data"
}
TypeGraphQL.registerEnumType(IntegrationDataScalarFieldEnum, {
  name: "IntegrationDataScalarFieldEnum",
  description: undefined,
});
