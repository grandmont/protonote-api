import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumIntegrationProviderNullableFilter } from "../inputs/NestedEnumIntegrationProviderNullableFilter";
import { NestedEnumIntegrationProviderNullableWithAggregatesFilter } from "../inputs/NestedEnumIntegrationProviderNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { IntegrationProvider } from "../../enums/IntegrationProvider";

@TypeGraphQL.InputType("EnumIntegrationProviderNullableWithAggregatesFilter", {
  isAbstract: true
})
export class EnumIntegrationProviderNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => IntegrationProvider, {
    nullable: true
  })
  equals?: "SPOTIFY" | "DEEZER" | "YOUTUBE" | undefined;

  @TypeGraphQL.Field(_type => [IntegrationProvider], {
    nullable: true
  })
  in?: Array<"SPOTIFY" | "DEEZER" | "YOUTUBE"> | undefined;

  @TypeGraphQL.Field(_type => [IntegrationProvider], {
    nullable: true
  })
  notIn?: Array<"SPOTIFY" | "DEEZER" | "YOUTUBE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIntegrationProviderNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumIntegrationProviderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIntegrationProviderNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumIntegrationProviderNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIntegrationProviderNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumIntegrationProviderNullableFilter | undefined;
}
