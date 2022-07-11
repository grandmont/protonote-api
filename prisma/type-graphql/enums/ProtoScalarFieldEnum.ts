import * as TypeGraphQL from "type-graphql";

export enum ProtoScalarFieldEnum {
  id = "id",
  name = "name"
}
TypeGraphQL.registerEnumType(ProtoScalarFieldEnum, {
  name: "ProtoScalarFieldEnum",
  description: undefined,
});
