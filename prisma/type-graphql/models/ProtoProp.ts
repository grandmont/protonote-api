import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Proto } from "../models/Proto";
import { ProtoPropEnum } from "../enums/ProtoPropEnum";

@TypeGraphQL.ObjectType("ProtoProp", {
  isAbstract: true
})
export class ProtoProp {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  value?: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => ProtoPropEnum, {
    nullable: false
  })
  type!: "DESCRIPTION" | "LIKERT";

  proto?: Proto;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  protoId!: number;
}
