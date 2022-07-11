import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumProtoPropTypeFilter } from "../inputs/NestedEnumProtoPropTypeFilter";
import { NestedEnumProtoPropTypeWithAggregatesFilter } from "../inputs/NestedEnumProtoPropTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ProtoPropType } from "../../enums/ProtoPropType";

@TypeGraphQL.InputType("EnumProtoPropTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumProtoPropTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ProtoPropType, {
    nullable: true
  })
  equals?: "DESCRIPTION" | "LIKERT" | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropType], {
    nullable: true
  })
  in?: Array<"DESCRIPTION" | "LIKERT"> | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropType], {
    nullable: true
  })
  notIn?: Array<"DESCRIPTION" | "LIKERT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumProtoPropTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumProtoPropTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumProtoPropTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumProtoPropTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumProtoPropTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumProtoPropTypeFilter | undefined;
}
