import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateNestedOneWithoutIntegrationsInput } from "../inputs/ProtoCreateNestedOneWithoutIntegrationsInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosCreateWithoutIntegrationDataInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosCreateWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => ProtoCreateNestedOneWithoutIntegrationsInput, {
    nullable: false
  })
  proto!: ProtoCreateNestedOneWithoutIntegrationsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
