import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAuthProviderFilter } from "../inputs/EnumAuthProviderFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntegrationListRelationFilter } from "../inputs/IntegrationListRelationFilter";
import { ProtoListRelationFilter } from "../inputs/ProtoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  picture?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAuthProviderFilter, {
    nullable: true
  })
  provider?: EnumAuthProviderFilter | undefined;

  @TypeGraphQL.Field(_type => ProtoListRelationFilter, {
    nullable: true
  })
  protos?: ProtoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntegrationListRelationFilter, {
    nullable: true
  })
  integrations?: IntegrationListRelationFilter | undefined;
}
