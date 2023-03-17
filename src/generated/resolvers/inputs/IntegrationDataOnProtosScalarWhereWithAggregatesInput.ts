import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("IntegrationDataOnProtosScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IntegrationDataOnProtosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IntegrationDataOnProtosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IntegrationDataOnProtosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  protoId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  integrationDataId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
