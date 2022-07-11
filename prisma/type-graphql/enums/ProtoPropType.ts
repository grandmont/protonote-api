import * as TypeGraphQL from "type-graphql";

export enum ProtoPropType {
  DESCRIPTION = "DESCRIPTION",
  LIKERT = "LIKERT"
}
TypeGraphQL.registerEnumType(ProtoPropType, {
  name: "ProtoPropType",
  description: undefined,
});
