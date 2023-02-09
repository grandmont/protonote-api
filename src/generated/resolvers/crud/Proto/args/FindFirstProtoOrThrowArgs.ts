import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoOrderByWithRelationInput } from "../../../inputs/ProtoOrderByWithRelationInput";
import { ProtoWhereInput } from "../../../inputs/ProtoWhereInput";
import { ProtoWhereUniqueInput } from "../../../inputs/ProtoWhereUniqueInput";
import { ProtoScalarFieldEnum } from "../../../../enums/ProtoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProtoOrThrowArgs {
  @TypeGraphQL.Field(_type => ProtoWhereInput, {
    nullable: true
  })
  where?: ProtoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProtoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProtoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProtoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProtoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "title" | "description" | "dateString" | "userId"> | undefined;
}
