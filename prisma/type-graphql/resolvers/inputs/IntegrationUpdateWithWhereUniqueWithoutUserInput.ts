import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationUpdateWithoutUserInput } from "../inputs/IntegrationUpdateWithoutUserInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class IntegrationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutUserInput, {
    nullable: false
  })
  data!: IntegrationUpdateWithoutUserInput;
}
