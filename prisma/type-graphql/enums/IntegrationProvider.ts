import * as TypeGraphQL from "type-graphql";

export enum IntegrationProvider {
  SPOTIFY = "SPOTIFY"
}
TypeGraphQL.registerEnumType(IntegrationProvider, {
  name: "IntegrationProvider",
  description: undefined,
});
