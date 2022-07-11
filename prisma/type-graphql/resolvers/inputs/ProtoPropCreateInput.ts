import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropType } from "../../enums/ProtoPropType";

@TypeGraphQL.InputType("ProtoPropCreateInput", {
  isAbstract: true
})
export class ProtoPropCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => ProtoPropType, {
    nullable: false
  })
  type!: "DESCRIPTION" | "LIKERT";
}
