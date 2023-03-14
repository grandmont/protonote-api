import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutIntegrationDataInput } from "../inputs/IntegrationCreateWithoutIntegrationDataInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateOrConnectWithoutIntegrationDataInput", {
  isAbstract: true
})
export class IntegrationCreateOrConnectWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutIntegrationDataInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutIntegrationDataInput;
}
