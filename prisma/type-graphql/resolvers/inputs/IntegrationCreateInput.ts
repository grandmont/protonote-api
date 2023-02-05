import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutIntegrationsInput } from "../inputs/UserCreateNestedOneWithoutIntegrationsInput";

@TypeGraphQL.InputType("IntegrationCreateInput", {
  isAbstract: true
})
export class IntegrationCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  externalId!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutIntegrationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutIntegrationsInput;
}
