import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumProtoPropTypeFilter } from "../inputs/NestedEnumProtoPropTypeFilter";
import { ProtoPropType } from "../../enums/ProtoPropType";

@TypeGraphQL.InputType("EnumProtoPropTypeFilter", {
  isAbstract: true
})
export class EnumProtoPropTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumProtoPropTypeFilter, {
    nullable: true
  })
  not?: NestedEnumProtoPropTypeFilter | undefined;
}
