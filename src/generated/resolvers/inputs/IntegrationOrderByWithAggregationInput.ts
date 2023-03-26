import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationAvgOrderByAggregateInput } from "../inputs/IntegrationAvgOrderByAggregateInput";
import { IntegrationCountOrderByAggregateInput } from "../inputs/IntegrationCountOrderByAggregateInput";
import { IntegrationMaxOrderByAggregateInput } from "../inputs/IntegrationMaxOrderByAggregateInput";
import { IntegrationMinOrderByAggregateInput } from "../inputs/IntegrationMinOrderByAggregateInput";
import { IntegrationSumOrderByAggregateInput } from "../inputs/IntegrationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IntegrationOrderByWithAggregationInput", {
  isAbstract: true
})
export class IntegrationOrderByWithAggregationInput {
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
  externalId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  refreshToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IntegrationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IntegrationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IntegrationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IntegrationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IntegrationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IntegrationSumOrderByAggregateInput | undefined;
}
