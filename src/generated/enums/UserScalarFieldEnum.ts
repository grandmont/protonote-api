import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  email = "email",
  name = "name",
  picture = "picture",
  timeZone = "timeZone",
  provider = "provider"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
