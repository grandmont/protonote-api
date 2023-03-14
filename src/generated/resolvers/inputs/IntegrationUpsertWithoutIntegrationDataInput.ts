import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutIntegrationDataInput } from "../inputs/IntegrationCreateWithoutIntegrationDataInput";
import { IntegrationUpdateWithoutIntegrationDataInput } from "../inputs/IntegrationUpdateWithoutIntegrationDataInput";

@TypeGraphQL.InputType("IntegrationUpsertWithoutIntegrationDataInput", {
  isAbstract: true
})
export class IntegrationUpsertWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutIntegrationDataInput, {
    nullable: false
  })
  update!: IntegrationUpdateWithoutIntegrationDataInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutIntegrationDataInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutIntegrationDataInput;
}
