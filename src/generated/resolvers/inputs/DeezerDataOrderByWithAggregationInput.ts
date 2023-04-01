import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataAvgOrderByAggregateInput } from "../inputs/DeezerDataAvgOrderByAggregateInput";
import { DeezerDataCountOrderByAggregateInput } from "../inputs/DeezerDataCountOrderByAggregateInput";
import { DeezerDataMaxOrderByAggregateInput } from "../inputs/DeezerDataMaxOrderByAggregateInput";
import { DeezerDataMinOrderByAggregateInput } from "../inputs/DeezerDataMinOrderByAggregateInput";
import { DeezerDataSumOrderByAggregateInput } from "../inputs/DeezerDataSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeezerDataOrderByWithAggregationInput", {
  isAbstract: true
})
export class DeezerDataOrderByWithAggregationInput {
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
  search?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  data?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DeezerDataCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DeezerDataCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DeezerDataAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DeezerDataMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DeezerDataMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DeezerDataSumOrderByAggregateInput | undefined;
}
