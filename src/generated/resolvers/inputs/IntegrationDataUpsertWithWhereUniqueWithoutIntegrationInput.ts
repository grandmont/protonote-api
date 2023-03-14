import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateWithoutIntegrationInput } from "../inputs/IntegrationDataCreateWithoutIntegrationInput";
import { IntegrationDataUpdateWithoutIntegrationInput } from "../inputs/IntegrationDataUpdateWithoutIntegrationInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataUpsertWithWhereUniqueWithoutIntegrationInput", {
  isAbstract: true
})
export class IntegrationDataUpsertWithWhereUniqueWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataUpdateWithoutIntegrationInput, {
    nullable: false
  })
  update!: IntegrationDataUpdateWithoutIntegrationInput;

  @TypeGraphQL.Field(_type => IntegrationDataCreateWithoutIntegrationInput, {
    nullable: false
  })
  create!: IntegrationDataCreateWithoutIntegrationInput;
}
