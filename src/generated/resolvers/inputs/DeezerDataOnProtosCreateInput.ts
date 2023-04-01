import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataCreateNestedOneWithoutProtosInput } from "../inputs/DeezerDataCreateNestedOneWithoutProtosInput";
import { ProtoCreateNestedOneWithoutDeezerInput } from "../inputs/ProtoCreateNestedOneWithoutDeezerInput";

@TypeGraphQL.InputType("DeezerDataOnProtosCreateInput", {
  isAbstract: true
})
export class DeezerDataOnProtosCreateInput {
  @TypeGraphQL.Field(_type => ProtoCreateNestedOneWithoutDeezerInput, {
    nullable: false
  })
  proto!: ProtoCreateNestedOneWithoutDeezerInput;

  @TypeGraphQL.Field(_type => DeezerDataCreateNestedOneWithoutProtosInput, {
    nullable: false
  })
  deezerData!: DeezerDataCreateNestedOneWithoutProtosInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
