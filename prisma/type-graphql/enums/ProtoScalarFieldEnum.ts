import * as TypeGraphQL from "type-graphql";

export enum ProtoScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  title = "title",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ProtoScalarFieldEnum, {
  name: "ProtoScalarFieldEnum",
  description: undefined,
});
