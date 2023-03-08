import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAuthProviderFilter } from "../inputs/NestedEnumAuthProviderFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { AuthProvider } from "../../enums/AuthProvider";

@TypeGraphQL.InputType("NestedEnumAuthProviderWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumAuthProviderWithAggregatesFilter {
  @TypeGraphQL.Field(_type => AuthProvider, {
    nullable: true
  })
  equals?: "GOOGLE" | "APPLE" | undefined;

  @TypeGraphQL.Field(_type => [AuthProvider], {
    nullable: true
  })
  in?: Array<"GOOGLE" | "APPLE"> | undefined;

  @TypeGraphQL.Field(_type => [AuthProvider], {
    nullable: true
  })
  notIn?: Array<"GOOGLE" | "APPLE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAuthProviderWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumAuthProviderWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAuthProviderFilter, {
    nullable: true
  })
  _min?: NestedEnumAuthProviderFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAuthProviderFilter, {
    nullable: true
  })
  _max?: NestedEnumAuthProviderFilter | undefined;
}
