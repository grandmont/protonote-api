import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropOrderByWithAggregationInput } from "../../../inputs/ProtoPropOrderByWithAggregationInput";
import { ProtoPropScalarWhereWithAggregatesInput } from "../../../inputs/ProtoPropScalarWhereWithAggregatesInput";
import { ProtoPropWhereInput } from "../../../inputs/ProtoPropWhereInput";
import { ProtoPropScalarFieldEnum } from "../../../../enums/ProtoPropScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProtoPropArgs {
  @TypeGraphQL.Field(_type => ProtoPropWhereInput, {
    nullable: true
  })
  where?: ProtoPropWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProtoPropOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name" | "type" | "protoId">;

  @TypeGraphQL.Field(_type => ProtoPropScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProtoPropScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
