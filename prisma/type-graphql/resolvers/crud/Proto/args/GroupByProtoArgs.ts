import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoOrderByWithAggregationInput } from "../../../inputs/ProtoOrderByWithAggregationInput";
import { ProtoScalarWhereWithAggregatesInput } from "../../../inputs/ProtoScalarWhereWithAggregatesInput";
import { ProtoWhereInput } from "../../../inputs/ProtoWhereInput";
import { ProtoScalarFieldEnum } from "../../../../enums/ProtoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProtoArgs {
  @TypeGraphQL.Field(_type => ProtoWhereInput, {
    nullable: true
  })
  where?: ProtoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProtoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProtoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "title" | "userId">;

  @TypeGraphQL.Field(_type => ProtoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProtoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
