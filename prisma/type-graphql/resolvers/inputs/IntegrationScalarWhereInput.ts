import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  externalId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;
}
