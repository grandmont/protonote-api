import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DeezerDataScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class DeezerDataScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DeezerDataScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DeezerDataScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DeezerDataScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DeezerDataScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  externalId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  search?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  data?: StringWithAggregatesFilter | undefined;
}
