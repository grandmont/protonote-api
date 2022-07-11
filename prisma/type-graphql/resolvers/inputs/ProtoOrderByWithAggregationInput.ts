import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoAvgOrderByAggregateInput } from "../inputs/ProtoAvgOrderByAggregateInput";
import { ProtoCountOrderByAggregateInput } from "../inputs/ProtoCountOrderByAggregateInput";
import { ProtoMaxOrderByAggregateInput } from "../inputs/ProtoMaxOrderByAggregateInput";
import { ProtoMinOrderByAggregateInput } from "../inputs/ProtoMinOrderByAggregateInput";
import { ProtoSumOrderByAggregateInput } from "../inputs/ProtoSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProtoOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProtoOrderByWithAggregationInput {
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
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProtoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProtoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProtoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProtoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProtoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProtoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProtoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProtoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProtoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProtoSumOrderByAggregateInput | undefined;
}
