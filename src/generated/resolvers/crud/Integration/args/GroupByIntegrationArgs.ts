import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationOrderByWithAggregationInput } from "../../../inputs/IntegrationOrderByWithAggregationInput";
import { IntegrationScalarWhereWithAggregatesInput } from "../../../inputs/IntegrationScalarWhereWithAggregatesInput";
import { IntegrationWhereInput } from "../../../inputs/IntegrationWhereInput";
import { IntegrationScalarFieldEnum } from "../../../../enums/IntegrationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IntegrationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "provider" | "status" | "refreshToken" | "userId">;

  @TypeGraphQL.Field(_type => IntegrationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IntegrationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
