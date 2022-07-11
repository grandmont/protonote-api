import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutPropsInput } from "../inputs/ProtoCreateWithoutPropsInput";
import { ProtoUpdateWithoutPropsInput } from "../inputs/ProtoUpdateWithoutPropsInput";

@TypeGraphQL.InputType("ProtoUpsertWithoutPropsInput", {
  isAbstract: true
})
export class ProtoUpsertWithoutPropsInput {
  @TypeGraphQL.Field(_type => ProtoUpdateWithoutPropsInput, {
    nullable: false
  })
  update!: ProtoUpdateWithoutPropsInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutPropsInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutPropsInput;
}
