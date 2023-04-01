import * as TypeGraphQL from "type-graphql";

export enum DeezerDataScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  externalId = "externalId",
  search = "search",
  data = "data"
}
TypeGraphQL.registerEnumType(DeezerDataScalarFieldEnum, {
  name: "DeezerDataScalarFieldEnum",
  description: undefined,
});
