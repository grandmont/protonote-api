import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateWithoutProtosInput } from "../inputs/IntegrationDataCreateWithoutProtosInput";
import { IntegrationDataUpdateWithoutProtosInput } from "../inputs/IntegrationDataUpdateWithoutProtosInput";

@TypeGraphQL.InputType("IntegrationDataUpsertWithoutProtosInput", {
  isAbstract: true
})
export class IntegrationDataUpsertWithoutProtosInput {
  @TypeGraphQL.Field(_type => IntegrationDataUpdateWithoutProtosInput, {
    nullable: false
  })
  update!: IntegrationDataUpdateWithoutProtosInput;

  @TypeGraphQL.Field(_type => IntegrationDataCreateWithoutProtosInput, {
    nullable: false
  })
  create!: IntegrationDataCreateWithoutProtosInput;
}
