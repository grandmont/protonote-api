import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { IntegrationProvider } from "../enums/IntegrationProvider";
import { IntegrationStatus } from "../enums/IntegrationStatus";

@TypeGraphQL.ObjectType("Integration", {
  isAbstract: true
})
export class Integration {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => IntegrationProvider, {
    nullable: true
  })
  provider?: "SPOTIFY" | "DEEZER" | "YOUTUBE" | null;

  @TypeGraphQL.Field(_type => IntegrationStatus, {
    nullable: true
  })
  status?: "CONNECTED" | "DISCONNECTED" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refreshToken?: string | null;

  user?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId?: number | null;
}
