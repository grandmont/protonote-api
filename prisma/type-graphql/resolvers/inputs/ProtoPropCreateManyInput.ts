import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropEnum } from "../../enums/ProtoPropEnum";

@TypeGraphQL.InputType("ProtoPropCreateManyInput", {
  isAbstract: true
})
export class ProtoPropCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  value?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => ProtoPropEnum, {
    nullable: false
  })
  type!: "DESCRIPTION" | "LIKERT";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  protoId!: number;
}
