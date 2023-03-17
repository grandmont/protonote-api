import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateNestedOneWithoutProtosInput } from "../inputs/IntegrationDataCreateNestedOneWithoutProtosInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosCreateWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosCreateWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataCreateNestedOneWithoutProtosInput, {
    nullable: false
  })
  integrationData!: IntegrationDataCreateNestedOneWithoutProtosInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
