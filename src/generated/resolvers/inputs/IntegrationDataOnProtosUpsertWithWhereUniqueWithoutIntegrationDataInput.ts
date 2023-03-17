import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosCreateWithoutIntegrationDataInput";
import { IntegrationDataOnProtosUpdateWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosUpdateWithoutIntegrationDataInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosUpsertWithWhereUniqueWithoutIntegrationDataInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosUpsertWithWhereUniqueWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosUpdateWithoutIntegrationDataInput, {
    nullable: false
  })
  update!: IntegrationDataOnProtosUpdateWithoutIntegrationDataInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateWithoutIntegrationDataInput, {
    nullable: false
  })
  create!: IntegrationDataOnProtosCreateWithoutIntegrationDataInput;
}
