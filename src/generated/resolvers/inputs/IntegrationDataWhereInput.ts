import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntegrationRelationFilter } from "../inputs/IntegrationRelationFilter";
import { ProtoRelationFilter } from "../inputs/ProtoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IntegrationDataWhereInput", {
  isAbstract: true
})
export class IntegrationDataWhereInput {
  @TypeGraphQL.Field(_type => [IntegrationDataWhereInput], {
    nullable: true
  })
  AND?: IntegrationDataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataWhereInput], {
    nullable: true
  })
  OR?: IntegrationDataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataWhereInput], {
    nullable: true
  })
  NOT?: IntegrationDataWhereInput[] | undefined;

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
  search?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  data?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntegrationRelationFilter, {
    nullable: true
  })
  integration?: IntegrationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  integrationId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ProtoRelationFilter, {
    nullable: true
  })
  proto?: ProtoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  protoId?: IntFilter | undefined;
}
