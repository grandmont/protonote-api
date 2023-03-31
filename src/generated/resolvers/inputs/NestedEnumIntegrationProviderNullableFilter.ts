import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationProvider } from "../../enums/IntegrationProvider";

@TypeGraphQL.InputType("NestedEnumIntegrationProviderNullableFilter", {
  isAbstract: true
})
export class NestedEnumIntegrationProviderNullableFilter {
  @TypeGraphQL.Field(_type => IntegrationProvider, {
    nullable: true
  })
  equals?: "SPOTIFY" | "DEEZER" | undefined;

  @TypeGraphQL.Field(_type => [IntegrationProvider], {
    nullable: true
  })
  in?: Array<"SPOTIFY" | "DEEZER"> | undefined;

  @TypeGraphQL.Field(_type => [IntegrationProvider], {
    nullable: true
  })
  notIn?: Array<"SPOTIFY" | "DEEZER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIntegrationProviderNullableFilter, {
    nullable: true
  })
  not?: NestedEnumIntegrationProviderNullableFilter | undefined;
}
