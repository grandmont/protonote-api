import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataCreateNestedOneWithoutProtosInput } from "../inputs/DeezerDataCreateNestedOneWithoutProtosInput";

@TypeGraphQL.InputType("DeezerDataOnProtosCreateWithoutProtoInput", {
  isAbstract: true
})
export class DeezerDataOnProtosCreateWithoutProtoInput {
  @TypeGraphQL.Field(_type => DeezerDataCreateNestedOneWithoutProtosInput, {
    nullable: false
  })
  deezerData!: DeezerDataCreateNestedOneWithoutProtosInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
