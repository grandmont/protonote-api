import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("DeezerDataOnProtosScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class DeezerDataOnProtosScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DeezerDataOnProtosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DeezerDataOnProtosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DeezerDataOnProtosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  protoId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  deezerDataId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
