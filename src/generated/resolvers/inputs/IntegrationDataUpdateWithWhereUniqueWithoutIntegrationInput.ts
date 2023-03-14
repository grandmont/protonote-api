import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataUpdateWithoutIntegrationInput } from "../inputs/IntegrationDataUpdateWithoutIntegrationInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataUpdateWithWhereUniqueWithoutIntegrationInput", {
  isAbstract: true
})
export class IntegrationDataUpdateWithWhereUniqueWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataUpdateWithoutIntegrationInput, {
    nullable: false
  })
  data!: IntegrationDataUpdateWithoutIntegrationInput;
}
