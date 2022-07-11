import * as TypeGraphQL from "type-graphql";

export enum ProtoPropScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  type = "type",
  protoId = "protoId"
}
TypeGraphQL.registerEnumType(ProtoPropScalarFieldEnum, {
  name: "ProtoPropScalarFieldEnum",
  description: undefined,
});
