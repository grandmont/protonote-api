import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOnProtosOrderByWithAggregationInput } from "../../../inputs/DeezerDataOnProtosOrderByWithAggregationInput";
import { DeezerDataOnProtosScalarWhereWithAggregatesInput } from "../../../inputs/DeezerDataOnProtosScalarWhereWithAggregatesInput";
import { DeezerDataOnProtosWhereInput } from "../../../inputs/DeezerDataOnProtosWhereInput";
import { DeezerDataOnProtosScalarFieldEnum } from "../../../../enums/DeezerDataOnProtosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDeezerDataOnProtosArgs {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereInput, {
    nullable: true
  })
  where?: DeezerDataOnProtosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DeezerDataOnProtosOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"protoId" | "deezerDataId" | "assignedAt">;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DeezerDataOnProtosScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
