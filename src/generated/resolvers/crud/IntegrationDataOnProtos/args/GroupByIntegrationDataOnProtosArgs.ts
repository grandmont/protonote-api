import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOnProtosOrderByWithAggregationInput } from "../../../inputs/IntegrationDataOnProtosOrderByWithAggregationInput";
import { IntegrationDataOnProtosScalarWhereWithAggregatesInput } from "../../../inputs/IntegrationDataOnProtosScalarWhereWithAggregatesInput";
import { IntegrationDataOnProtosWhereInput } from "../../../inputs/IntegrationDataOnProtosWhereInput";
import { IntegrationDataOnProtosScalarFieldEnum } from "../../../../enums/IntegrationDataOnProtosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIntegrationDataOnProtosArgs {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereInput, {
    nullable: true
  })
  where?: IntegrationDataOnProtosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IntegrationDataOnProtosOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"protoId" | "integrationDataId" | "assignedAt">;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IntegrationDataOnProtosScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
