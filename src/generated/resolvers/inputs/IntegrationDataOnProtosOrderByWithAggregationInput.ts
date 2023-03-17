import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosAvgOrderByAggregateInput } from "../inputs/IntegrationDataOnProtosAvgOrderByAggregateInput";
import { IntegrationDataOnProtosCountOrderByAggregateInput } from "../inputs/IntegrationDataOnProtosCountOrderByAggregateInput";
import { IntegrationDataOnProtosMaxOrderByAggregateInput } from "../inputs/IntegrationDataOnProtosMaxOrderByAggregateInput";
import { IntegrationDataOnProtosMinOrderByAggregateInput } from "../inputs/IntegrationDataOnProtosMinOrderByAggregateInput";
import { IntegrationDataOnProtosSumOrderByAggregateInput } from "../inputs/IntegrationDataOnProtosSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IntegrationDataOnProtosOrderByWithAggregationInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  protoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  integrationDataId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IntegrationDataOnProtosCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IntegrationDataOnProtosAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IntegrationDataOnProtosMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IntegrationDataOnProtosMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IntegrationDataOnProtosSumOrderByAggregateInput | undefined;
}
