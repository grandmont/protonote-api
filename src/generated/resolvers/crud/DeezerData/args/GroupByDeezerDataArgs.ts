import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOrderByWithAggregationInput } from "../../../inputs/DeezerDataOrderByWithAggregationInput";
import { DeezerDataScalarWhereWithAggregatesInput } from "../../../inputs/DeezerDataScalarWhereWithAggregatesInput";
import { DeezerDataWhereInput } from "../../../inputs/DeezerDataWhereInput";
import { DeezerDataScalarFieldEnum } from "../../../../enums/DeezerDataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDeezerDataArgs {
  @TypeGraphQL.Field(_type => DeezerDataWhereInput, {
    nullable: true
  })
  where?: DeezerDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DeezerDataOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "externalId" | "search" | "data">;

  @TypeGraphQL.Field(_type => DeezerDataScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DeezerDataScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
