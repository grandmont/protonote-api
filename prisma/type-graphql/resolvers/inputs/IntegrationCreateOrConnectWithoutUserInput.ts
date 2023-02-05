import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutUserInput } from "../inputs/IntegrationCreateWithoutUserInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class IntegrationCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutUserInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutUserInput;
}
