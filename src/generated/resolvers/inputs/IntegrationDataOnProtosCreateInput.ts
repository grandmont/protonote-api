import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateNestedOneWithoutProtosInput } from "../inputs/IntegrationDataCreateNestedOneWithoutProtosInput";
import { ProtoCreateNestedOneWithoutIntegrationsInput } from "../inputs/ProtoCreateNestedOneWithoutIntegrationsInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosCreateInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosCreateInput {
  @TypeGraphQL.Field(_type => ProtoCreateNestedOneWithoutIntegrationsInput, {
    nullable: false
  })
  proto!: ProtoCreateNestedOneWithoutIntegrationsInput;

  @TypeGraphQL.Field(_type => IntegrationDataCreateNestedOneWithoutProtosInput, {
    nullable: false
  })
  integrationData!: IntegrationDataCreateNestedOneWithoutProtosInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
