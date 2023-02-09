import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumIntegrationStatusNullableFilter } from "../inputs/NestedEnumIntegrationStatusNullableFilter";
import { NestedEnumIntegrationStatusNullableWithAggregatesFilter } from "../inputs/NestedEnumIntegrationStatusNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { IntegrationStatus } from "../../enums/IntegrationStatus";

@TypeGraphQL.InputType("EnumIntegrationStatusNullableWithAggregatesFilter", {
  isAbstract: true
})
export class EnumIntegrationStatusNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => IntegrationStatus, {
    nullable: true
  })
  equals?: "CONNECTED" | "DISCONNECTED" | undefined;

  @TypeGraphQL.Field(_type => [IntegrationStatus], {
    nullable: true
  })
  in?: Array<"CONNECTED" | "DISCONNECTED"> | undefined;

  @TypeGraphQL.Field(_type => [IntegrationStatus], {
    nullable: true
  })
  notIn?: Array<"CONNECTED" | "DISCONNECTED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIntegrationStatusNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumIntegrationStatusNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIntegrationStatusNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumIntegrationStatusNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIntegrationStatusNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumIntegrationStatusNullableFilter | undefined;
}
