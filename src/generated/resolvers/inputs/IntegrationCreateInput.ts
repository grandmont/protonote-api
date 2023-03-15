import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateNestedManyWithoutIntegrationInput } from "../inputs/IntegrationDataCreateNestedManyWithoutIntegrationInput";
import { UserCreateNestedOneWithoutIntegrationsInput } from "../inputs/UserCreateNestedOneWithoutIntegrationsInput";
import { IntegrationProvider } from "../../enums/IntegrationProvider";
import { IntegrationStatus } from "../../enums/IntegrationStatus";

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

  @TypeGraphQL.Field(_type => IntegrationProvider, {
    nullable: true
  })
  provider?: "SPOTIFY" | undefined;

  @TypeGraphQL.Field(_type => IntegrationStatus, {
    nullable: true
  })
  status?: "CONNECTED" | "DISCONNECTED" | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutIntegrationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutIntegrationsInput;

  @TypeGraphQL.Field(_type => IntegrationDataCreateNestedManyWithoutIntegrationInput, {
    nullable: true
  })
  integrationData?: IntegrationDataCreateNestedManyWithoutIntegrationInput | undefined;
}
