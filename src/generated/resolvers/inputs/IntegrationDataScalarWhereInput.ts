import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IntegrationDataScalarWhereInput", {
  isAbstract: true
})
export class IntegrationDataScalarWhereInput {
  @TypeGraphQL.Field(_type => [IntegrationDataScalarWhereInput], {
    nullable: true
  })
  AND?: IntegrationDataScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataScalarWhereInput], {
    nullable: true
  })
  OR?: IntegrationDataScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataScalarWhereInput], {
    nullable: true
  })
  NOT?: IntegrationDataScalarWhereInput[] | undefined;

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
  data?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  integrationId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  protoId?: IntFilter | undefined;
}
