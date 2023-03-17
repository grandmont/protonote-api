import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateNestedManyWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosCreateNestedManyWithoutIntegrationDataInput";

@TypeGraphQL.InputType("IntegrationDataCreateInput", {
  isAbstract: true
})
export class IntegrationDataCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  externalId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  data!: string;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateNestedManyWithoutIntegrationDataInput, {
    nullable: true
  })
  protos?: IntegrationDataOnProtosCreateNestedManyWithoutIntegrationDataInput | undefined;
}
