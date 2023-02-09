import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoAvgAggregate } from "../outputs/ProtoAvgAggregate";
import { ProtoCountAggregate } from "../outputs/ProtoCountAggregate";
import { ProtoMaxAggregate } from "../outputs/ProtoMaxAggregate";
import { ProtoMinAggregate } from "../outputs/ProtoMinAggregate";
import { ProtoSumAggregate } from "../outputs/ProtoSumAggregate";

@TypeGraphQL.ObjectType("AggregateProto", {
  isAbstract: true
})
export class AggregateProto {
  @TypeGraphQL.Field(_type => ProtoCountAggregate, {
    nullable: true
  })
  _count!: ProtoCountAggregate | null;

  @TypeGraphQL.Field(_type => ProtoAvgAggregate, {
    nullable: true
  })
  _avg!: ProtoAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProtoSumAggregate, {
    nullable: true
  })
  _sum!: ProtoSumAggregate | null;

  @TypeGraphQL.Field(_type => ProtoMinAggregate, {
    nullable: true
  })
  _min!: ProtoMinAggregate | null;

  @TypeGraphQL.Field(_type => ProtoMaxAggregate, {
    nullable: true
  })
  _max!: ProtoMaxAggregate | null;
}
