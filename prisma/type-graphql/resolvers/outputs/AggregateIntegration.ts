import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationAvgAggregate } from "../outputs/IntegrationAvgAggregate";
import { IntegrationCountAggregate } from "../outputs/IntegrationCountAggregate";
import { IntegrationMaxAggregate } from "../outputs/IntegrationMaxAggregate";
import { IntegrationMinAggregate } from "../outputs/IntegrationMinAggregate";
import { IntegrationSumAggregate } from "../outputs/IntegrationSumAggregate";

@TypeGraphQL.ObjectType("AggregateIntegration", {
  isAbstract: true
})
export class AggregateIntegration {
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
