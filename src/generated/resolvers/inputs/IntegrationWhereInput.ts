import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumIntegrationProviderNullableFilter } from "../inputs/EnumIntegrationProviderNullableFilter";
import { EnumIntegrationStatusNullableFilter } from "../inputs/EnumIntegrationStatusNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntegrationDataListRelationFilter } from "../inputs/IntegrationDataListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("IntegrationWhereInput", {
  isAbstract: true
})
export class IntegrationWhereInput {
  @TypeGraphQL.Field(_type => [IntegrationWhereInput], {
    nullable: true
  })
  AND?: IntegrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationWhereInput], {
    nullable: true
  })
  OR?: IntegrationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationWhereInput], {
    nullable: true
  })
  NOT?: IntegrationWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  externalId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumIntegrationProviderNullableFilter, {
    nullable: true
  })
  provider?: EnumIntegrationProviderNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumIntegrationStatusNullableFilter, {
    nullable: true
  })
  status?: EnumIntegrationStatusNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataListRelationFilter, {
    nullable: true
  })
  integrationData?: IntegrationDataListRelationFilter | undefined;
}
