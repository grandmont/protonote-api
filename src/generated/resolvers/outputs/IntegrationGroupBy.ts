import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationAvgAggregate } from "../outputs/IntegrationAvgAggregate";
import { IntegrationCountAggregate } from "../outputs/IntegrationCountAggregate";
import { IntegrationMaxAggregate } from "../outputs/IntegrationMaxAggregate";
import { IntegrationMinAggregate } from "../outputs/IntegrationMinAggregate";
import { IntegrationSumAggregate } from "../outputs/IntegrationSumAggregate";
import { IntegrationProvider } from "../../enums/IntegrationProvider";
import { IntegrationStatus } from "../../enums/IntegrationStatus";

@TypeGraphQL.ObjectType("IntegrationGroupBy", {
  isAbstract: true
})
export class IntegrationGroupBy {
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

  @TypeGraphQL.Field(_type => IntegrationCountAggregate, {
    nullable: true
  })
  _count!: IntegrationCountAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationAvgAggregate, {
    nullable: true
  })
  _avg!: IntegrationAvgAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationSumAggregate, {
    nullable: true
  })
  _sum!: IntegrationSumAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationMinAggregate, {
    nullable: true
  })
  _min!: IntegrationMinAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationMaxAggregate, {
    nullable: true
  })
  _max!: IntegrationMaxAggregate | null;
}
