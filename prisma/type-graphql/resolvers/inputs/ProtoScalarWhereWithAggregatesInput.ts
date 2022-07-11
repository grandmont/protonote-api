import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("ProtoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProtoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProtoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProtoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProtoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProtoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
