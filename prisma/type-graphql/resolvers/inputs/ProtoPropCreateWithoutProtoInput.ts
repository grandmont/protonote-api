import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropEnum } from "../../enums/ProtoPropEnum";

@TypeGraphQL.InputType("ProtoPropCreateWithoutProtoInput", {
  isAbstract: true
})
export class ProtoPropCreateWithoutProtoInput {
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
}
