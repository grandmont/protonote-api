import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumIntegrationProviderNullableWithAggregatesFilter } from "../inputs/EnumIntegrationProviderNullableWithAggregatesFilter";
import { EnumIntegrationStatusNullableWithAggregatesFilter } from "../inputs/EnumIntegrationStatusNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IntegrationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class IntegrationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IntegrationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IntegrationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IntegrationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IntegrationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  externalId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumIntegrationProviderNullableWithAggregatesFilter, {
    nullable: true
  })
  provider?: EnumIntegrationProviderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumIntegrationStatusNullableWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumIntegrationStatusNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
