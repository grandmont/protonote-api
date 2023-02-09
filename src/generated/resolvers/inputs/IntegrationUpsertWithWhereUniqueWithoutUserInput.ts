import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutUserInput } from "../inputs/IntegrationCreateWithoutUserInput";
import { IntegrationUpdateWithoutUserInput } from "../inputs/IntegrationUpdateWithoutUserInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class IntegrationUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutUserInput, {
    nullable: false
  })
  update!: IntegrationUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutUserInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutUserInput;
}
