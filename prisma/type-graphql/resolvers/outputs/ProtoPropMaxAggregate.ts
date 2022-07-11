import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropType } from "../../enums/ProtoPropType";

@TypeGraphQL.ObjectType("ProtoPropMaxAggregate", {
  isAbstract: true
})
export class ProtoPropMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => ProtoPropType, {
    nullable: true
  })
  type!: "DESCRIPTION" | "LIKERT" | null;
}
