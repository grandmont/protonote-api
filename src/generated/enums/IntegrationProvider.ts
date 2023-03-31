import * as TypeGraphQL from "type-graphql";

export enum IntegrationProvider {
  SPOTIFY = "SPOTIFY",
  DEEZER = "DEEZER"
}
TypeGraphQL.registerEnumType(IntegrationProvider, {
  name: "IntegrationProvider",
  description: undefined,
});
