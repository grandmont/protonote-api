import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropAvgOrderByAggregateInput } from "../inputs/ProtoPropAvgOrderByAggregateInput";
import { ProtoPropCountOrderByAggregateInput } from "../inputs/ProtoPropCountOrderByAggregateInput";
import { ProtoPropMaxOrderByAggregateInput } from "../inputs/ProtoPropMaxOrderByAggregateInput";
import { ProtoPropMinOrderByAggregateInput } from "../inputs/ProtoPropMinOrderByAggregateInput";
import { ProtoPropSumOrderByAggregateInput } from "../inputs/ProtoPropSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProtoPropOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProtoPropOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProtoPropCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProtoPropCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProtoPropAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProtoPropAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProtoPropMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProtoPropMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProtoPropMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProtoPropMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProtoPropSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProtoPropSumOrderByAggregateInput | undefined;
}
