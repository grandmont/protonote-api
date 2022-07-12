import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumProtoPropEnumWithAggregatesFilter } from "../inputs/EnumProtoPropEnumWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";

@TypeGraphQL.InputType("ProtoPropScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProtoPropScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProtoPropScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProtoPropScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProtoPropScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProtoPropScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => JsonNullableWithAggregatesFilter, {
    nullable: true
  })
  value?: JsonNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumProtoPropEnumWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumProtoPropEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  protoId?: IntWithAggregatesFilter | undefined;
}
