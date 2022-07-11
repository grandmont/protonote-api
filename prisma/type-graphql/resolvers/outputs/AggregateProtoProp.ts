import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropAvgAggregate } from "../outputs/ProtoPropAvgAggregate";
import { ProtoPropCountAggregate } from "../outputs/ProtoPropCountAggregate";
import { ProtoPropMaxAggregate } from "../outputs/ProtoPropMaxAggregate";
import { ProtoPropMinAggregate } from "../outputs/ProtoPropMinAggregate";
import { ProtoPropSumAggregate } from "../outputs/ProtoPropSumAggregate";

@TypeGraphQL.ObjectType("AggregateProtoProp", {
  isAbstract: true
})
export class AggregateProtoProp {
  @TypeGraphQL.Field(_type => ProtoPropCountAggregate, {
    nullable: true
  })
  _count!: ProtoPropCountAggregate | null;

  @TypeGraphQL.Field(_type => ProtoPropAvgAggregate, {
    nullable: true
  })
  _avg!: ProtoPropAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProtoPropSumAggregate, {
    nullable: true
  })
  _sum!: ProtoPropSumAggregate | null;

  @TypeGraphQL.Field(_type => ProtoPropMinAggregate, {
    nullable: true
  })
  _min!: ProtoPropMinAggregate | null;

  @TypeGraphQL.Field(_type => ProtoPropMaxAggregate, {
    nullable: true
  })
  _max!: ProtoPropMaxAggregate | null;
}
