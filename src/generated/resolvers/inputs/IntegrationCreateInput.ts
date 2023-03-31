import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
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
    nullable: true
  })
  externalId?: string | undefined;

  @TypeGraphQL.Field(_type => IntegrationProvider, {
    nullable: true
  })
  provider?: "SPOTIFY" | "DEEZER" | undefined;

  @TypeGraphQL.Field(_type => IntegrationStatus, {
    nullable: true
  })
  status?: "CONNECTED" | "DISCONNECTED" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshToken?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutIntegrationsInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutIntegrationsInput | undefined;
}
