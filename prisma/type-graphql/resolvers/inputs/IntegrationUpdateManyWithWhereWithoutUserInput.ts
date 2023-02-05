import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationScalarWhereInput } from "../inputs/IntegrationScalarWhereInput";
import { IntegrationUpdateManyMutationInput } from "../inputs/IntegrationUpdateManyMutationInput";

@TypeGraphQL.InputType("IntegrationUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class IntegrationUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => IntegrationScalarWhereInput, {
    nullable: false
  })
  where!: IntegrationScalarWhereInput;

  @TypeGraphQL.Field(_type => IntegrationUpdateManyMutationInput, {
    nullable: false
  })
  data!: IntegrationUpdateManyMutationInput;
}
