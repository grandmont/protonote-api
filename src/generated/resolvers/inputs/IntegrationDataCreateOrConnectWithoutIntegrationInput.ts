import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateWithoutIntegrationInput } from "../inputs/IntegrationDataCreateWithoutIntegrationInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataCreateOrConnectWithoutIntegrationInput", {
  isAbstract: true
})
export class IntegrationDataCreateOrConnectWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataCreateWithoutIntegrationInput, {
    nullable: false
  })
  create!: IntegrationDataCreateWithoutIntegrationInput;
}
