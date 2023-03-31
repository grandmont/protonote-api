import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationProvider } from "../../enums/IntegrationProvider";
import { IntegrationStatus } from "../../enums/IntegrationStatus";

@TypeGraphQL.ObjectType("IntegrationMinAggregate", {
  isAbstract: true
})
export class IntegrationMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  externalId!: string | null;

  @TypeGraphQL.Field(_type => IntegrationProvider, {
    nullable: true
  })
  provider!: "SPOTIFY" | "DEEZER" | null;

  @TypeGraphQL.Field(_type => IntegrationStatus, {
    nullable: true
  })
  status!: "CONNECTED" | "DISCONNECTED" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshToken!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;
}
