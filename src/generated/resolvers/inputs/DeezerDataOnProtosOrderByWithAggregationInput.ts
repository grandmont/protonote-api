import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosAvgOrderByAggregateInput } from "../inputs/DeezerDataOnProtosAvgOrderByAggregateInput";
import { DeezerDataOnProtosCountOrderByAggregateInput } from "../inputs/DeezerDataOnProtosCountOrderByAggregateInput";
import { DeezerDataOnProtosMaxOrderByAggregateInput } from "../inputs/DeezerDataOnProtosMaxOrderByAggregateInput";
import { DeezerDataOnProtosMinOrderByAggregateInput } from "../inputs/DeezerDataOnProtosMinOrderByAggregateInput";
import { DeezerDataOnProtosSumOrderByAggregateInput } from "../inputs/DeezerDataOnProtosSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeezerDataOnProtosOrderByWithAggregationInput", {
  isAbstract: true
})
export class DeezerDataOnProtosOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  protoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deezerDataId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DeezerDataOnProtosCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DeezerDataOnProtosAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DeezerDataOnProtosMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DeezerDataOnProtosMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DeezerDataOnProtosSumOrderByAggregateInput | undefined;
}
