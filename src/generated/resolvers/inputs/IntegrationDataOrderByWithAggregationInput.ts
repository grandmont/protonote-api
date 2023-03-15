import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataAvgOrderByAggregateInput } from "../inputs/IntegrationDataAvgOrderByAggregateInput";
import { IntegrationDataCountOrderByAggregateInput } from "../inputs/IntegrationDataCountOrderByAggregateInput";
import { IntegrationDataMaxOrderByAggregateInput } from "../inputs/IntegrationDataMaxOrderByAggregateInput";
import { IntegrationDataMinOrderByAggregateInput } from "../inputs/IntegrationDataMinOrderByAggregateInput";
import { IntegrationDataSumOrderByAggregateInput } from "../inputs/IntegrationDataSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IntegrationDataOrderByWithAggregationInput", {
  isAbstract: true
})
export class IntegrationDataOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  search?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  data?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  integrationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  protoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IntegrationDataCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IntegrationDataAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IntegrationDataMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IntegrationDataMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IntegrationDataSumOrderByAggregateInput | undefined;
}
