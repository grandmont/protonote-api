import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOrderByWithAggregationInput } from "../../../inputs/IntegrationDataOrderByWithAggregationInput";
import { IntegrationDataScalarWhereWithAggregatesInput } from "../../../inputs/IntegrationDataScalarWhereWithAggregatesInput";
import { IntegrationDataWhereInput } from "../../../inputs/IntegrationDataWhereInput";
import { IntegrationDataScalarFieldEnum } from "../../../../enums/IntegrationDataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIntegrationDataArgs {
  @TypeGraphQL.Field(_type => IntegrationDataWhereInput, {
    nullable: true
  })
  where?: IntegrationDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IntegrationDataOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "search" | "data" | "integrationId" | "protoId">;

  @TypeGraphQL.Field(_type => IntegrationDataScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IntegrationDataScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
