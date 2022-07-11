import * as TypeGraphQL from "type-graphql";

export enum ProtoPropEnum {
  DESCRIPTION = "DESCRIPTION",
  LIKERT = "LIKERT"
}
TypeGraphQL.registerEnumType(ProtoPropEnum, {
  name: "ProtoPropEnum",
  description: undefined,
});
