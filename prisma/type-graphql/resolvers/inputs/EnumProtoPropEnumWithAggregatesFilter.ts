import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumProtoPropEnumFilter } from "../inputs/NestedEnumProtoPropEnumFilter";
import { NestedEnumProtoPropEnumWithAggregatesFilter } from "../inputs/NestedEnumProtoPropEnumWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ProtoPropEnum } from "../../enums/ProtoPropEnum";

@TypeGraphQL.InputType("EnumProtoPropEnumWithAggregatesFilter", {
  isAbstract: true
})
export class EnumProtoPropEnumWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ProtoPropEnum, {
    nullable: true
  })
  equals?: "DESCRIPTION" | "LIKERT" | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropEnum], {
    nullable: true
  })
  in?: Array<"DESCRIPTION" | "LIKERT"> | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropEnum], {
    nullable: true
  })
  notIn?: Array<"DESCRIPTION" | "LIKERT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumProtoPropEnumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumProtoPropEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumProtoPropEnumFilter, {
    nullable: true
  })
  _min?: NestedEnumProtoPropEnumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumProtoPropEnumFilter, {
    nullable: true
  })
  _max?: NestedEnumProtoPropEnumFilter | undefined;
}
