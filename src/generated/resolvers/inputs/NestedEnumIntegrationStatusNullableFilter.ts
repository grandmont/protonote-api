import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationStatus } from "../../enums/IntegrationStatus";

@TypeGraphQL.InputType("NestedEnumIntegrationStatusNullableFilter", {
  isAbstract: true
})
export class NestedEnumIntegrationStatusNullableFilter {
  @TypeGraphQL.Field(_type => IntegrationStatus, {
    nullable: true
  })
  equals?: "CONNECTED" | "DISCONNECTED" | undefined;

  @TypeGraphQL.Field(_type => [IntegrationStatus], {
    nullable: true
  })
  in?: Array<"CONNECTED" | "DISCONNECTED"> | undefined;

  @TypeGraphQL.Field(_type => [IntegrationStatus], {
    nullable: true
  })
  notIn?: Array<"CONNECTED" | "DISCONNECTED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIntegrationStatusNullableFilter, {
    nullable: true
  })
  not?: NestedEnumIntegrationStatusNullableFilter | undefined;
}
