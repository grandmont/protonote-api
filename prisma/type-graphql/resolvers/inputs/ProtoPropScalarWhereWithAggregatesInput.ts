import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumProtoPropTypeWithAggregatesFilter } from "../inputs/EnumProtoPropTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

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

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumProtoPropTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumProtoPropTypeWithAggregatesFilter | undefined;
}
