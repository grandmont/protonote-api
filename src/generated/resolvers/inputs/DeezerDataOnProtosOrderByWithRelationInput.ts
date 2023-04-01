import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOrderByWithRelationInput } from "../inputs/DeezerDataOrderByWithRelationInput";
import { ProtoOrderByWithRelationInput } from "../inputs/ProtoOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DeezerDataOnProtosOrderByWithRelationInput", {
  isAbstract: true
})
export class DeezerDataOnProtosOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => ProtoOrderByWithRelationInput, {
    nullable: true
  })
  proto?: ProtoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  protoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOrderByWithRelationInput, {
    nullable: true
  })
  deezerData?: DeezerDataOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deezerDataId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;
}
