import * as TypeGraphQL from "type-graphql";

export enum ProtoPropScalarFieldEnum {
  id = "id",
  name = "name",
  type = "type"
}
TypeGraphQL.registerEnumType(ProtoPropScalarFieldEnum, {
  name: "ProtoPropScalarFieldEnum",
  description: undefined,
});
