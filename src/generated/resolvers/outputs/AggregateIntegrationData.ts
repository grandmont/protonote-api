import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataAvgAggregate } from "../outputs/IntegrationDataAvgAggregate";
import { IntegrationDataCountAggregate } from "../outputs/IntegrationDataCountAggregate";
import { IntegrationDataMaxAggregate } from "../outputs/IntegrationDataMaxAggregate";
import { IntegrationDataMinAggregate } from "../outputs/IntegrationDataMinAggregate";
import { IntegrationDataSumAggregate } from "../outputs/IntegrationDataSumAggregate";

@TypeGraphQL.ObjectType("AggregateIntegrationData", {
  isAbstract: true
})
export class AggregateIntegrationData {
  @TypeGraphQL.Field(_type => IntegrationDataCountAggregate, {
    nullable: true
  })
  _count!: IntegrationDataCountAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationDataAvgAggregate, {
    nullable: true
  })
  _avg!: IntegrationDataAvgAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationDataSumAggregate, {
    nullable: true
  })
  _sum!: IntegrationDataSumAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationDataMinAggregate, {
    nullable: true
  })
  _min!: IntegrationDataMinAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationDataMaxAggregate, {
    nullable: true
  })
  _max!: IntegrationDataMaxAggregate | null;
}
