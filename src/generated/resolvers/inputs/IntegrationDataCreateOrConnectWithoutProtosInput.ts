import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateWithoutProtosInput } from "../inputs/IntegrationDataCreateWithoutProtosInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataCreateOrConnectWithoutProtosInput", {
  isAbstract: true
})
export class IntegrationDataCreateOrConnectWithoutProtosInput {
  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataCreateWithoutProtosInput, {
    nullable: false
  })
  create!: IntegrationDataCreateWithoutProtosInput;
}
