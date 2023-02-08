import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationOrderByRelationAggregateInput } from "../inputs/IntegrationOrderByRelationAggregateInput";
import { ProtoOrderByRelationAggregateInput } from "../inputs/ProtoOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  picture?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProtoOrderByRelationAggregateInput, {
    nullable: true
  })
  protos?: ProtoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationOrderByRelationAggregateInput, {
    nullable: true
  })
  integrations?: IntegrationOrderByRelationAggregateInput | undefined;
}
