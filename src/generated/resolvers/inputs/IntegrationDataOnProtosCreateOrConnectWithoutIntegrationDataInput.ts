import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosCreateWithoutIntegrationDataInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateWithoutIntegrationDataInput, {
    nullable: false
  })
  create!: IntegrationDataOnProtosCreateWithoutIntegrationDataInput;
}
