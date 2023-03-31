import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumIntegrationProviderNullableFilter } from "../inputs/EnumIntegrationProviderNullableFilter";
import { EnumIntegrationStatusNullableFilter } from "../inputs/EnumIntegrationStatusNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IntegrationScalarWhereInput", {
  isAbstract: true
})
export class IntegrationScalarWhereInput {
  @TypeGraphQL.Field(_type => [IntegrationScalarWhereInput], {
    nullable: true
  })
  AND?: IntegrationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationScalarWhereInput], {
    nullable: true
  })
  OR?: IntegrationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationScalarWhereInput], {
    nullable: true
  })
  NOT?: IntegrationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumIntegrationProviderNullableFilter, {
    nullable: true
  })
  provider?: EnumIntegrationProviderNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumIntegrationStatusNullableFilter, {
    nullable: true
  })
  status?: EnumIntegrationStatusNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  refreshToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  userId?: IntNullableFilter | undefined;
}
