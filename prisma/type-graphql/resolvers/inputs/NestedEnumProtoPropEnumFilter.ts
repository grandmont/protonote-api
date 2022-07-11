import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropEnum } from "../../enums/ProtoPropEnum";

@TypeGraphQL.InputType("NestedEnumProtoPropEnumFilter", {
  isAbstract: true
})
export class NestedEnumProtoPropEnumFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumProtoPropEnumFilter, {
    nullable: true
  })
  not?: NestedEnumProtoPropEnumFilter | undefined;
}
