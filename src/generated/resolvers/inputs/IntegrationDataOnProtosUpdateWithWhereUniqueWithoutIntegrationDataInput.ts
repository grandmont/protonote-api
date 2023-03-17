import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosUpdateWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosUpdateWithoutIntegrationDataInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosUpdateWithWhereUniqueWithoutIntegrationDataInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosUpdateWithWhereUniqueWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosUpdateWithoutIntegrationDataInput, {
    nullable: false
  })
  data!: IntegrationDataOnProtosUpdateWithoutIntegrationDataInput;
}
