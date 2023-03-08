import * as TypeGraphQL from "type-graphql";

export enum AuthProvider {
  GOOGLE = "GOOGLE",
  APPLE = "APPLE"
}
TypeGraphQL.registerEnumType(AuthProvider, {
  name: "AuthProvider",
  description: undefined,
});
