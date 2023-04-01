import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateNestedOneWithoutDeezerInput } from "../inputs/ProtoCreateNestedOneWithoutDeezerInput";

@TypeGraphQL.InputType("DeezerDataOnProtosCreateWithoutDeezerDataInput", {
  isAbstract: true
})
export class DeezerDataOnProtosCreateWithoutDeezerDataInput {
  @TypeGraphQL.Field(_type => ProtoCreateNestedOneWithoutDeezerInput, {
    nullable: false
  })
  proto!: ProtoCreateNestedOneWithoutDeezerInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
