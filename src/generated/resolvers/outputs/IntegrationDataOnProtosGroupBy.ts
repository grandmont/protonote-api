import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosAvgAggregate } from "../outputs/IntegrationDataOnProtosAvgAggregate";
import { IntegrationDataOnProtosCountAggregate } from "../outputs/IntegrationDataOnProtosCountAggregate";
import { IntegrationDataOnProtosMaxAggregate } from "../outputs/IntegrationDataOnProtosMaxAggregate";
import { IntegrationDataOnProtosMinAggregate } from "../outputs/IntegrationDataOnProtosMinAggregate";
import { IntegrationDataOnProtosSumAggregate } from "../outputs/IntegrationDataOnProtosSumAggregate";

@TypeGraphQL.ObjectType("IntegrationDataOnProtosGroupBy", {
  isAbstract: true
})
export class IntegrationDataOnProtosGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  protoId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  integrationDataId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCountAggregate, {
    nullable: true
  })
  _count!: IntegrationDataOnProtosCountAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosAvgAggregate, {
    nullable: true
  })
  _avg!: IntegrationDataOnProtosAvgAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosSumAggregate, {
    nullable: true
  })
  _sum!: IntegrationDataOnProtosSumAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosMinAggregate, {
    nullable: true
  })
  _min!: IntegrationDataOnProtosMinAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosMaxAggregate, {
    nullable: true
  })
  _max!: IntegrationDataOnProtosMaxAggregate | null;
}
