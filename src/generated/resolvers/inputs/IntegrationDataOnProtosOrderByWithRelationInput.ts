import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOrderByWithRelationInput } from "../inputs/IntegrationDataOrderByWithRelationInput";
import { ProtoOrderByWithRelationInput } from "../inputs/ProtoOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IntegrationDataOnProtosOrderByWithRelationInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => ProtoOrderByWithRelationInput, {
    nullable: true
  })
  proto?: ProtoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  protoId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOrderByWithRelationInput, {
    nullable: true
  })
  integrationData?: IntegrationDataOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  integrationDataId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;
}
