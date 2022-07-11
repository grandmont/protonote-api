import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoAvgAggregate } from "../outputs/ProtoAvgAggregate";
import { ProtoCountAggregate } from "../outputs/ProtoCountAggregate";
import { ProtoMaxAggregate } from "../outputs/ProtoMaxAggregate";
import { ProtoMinAggregate } from "../outputs/ProtoMinAggregate";
import { ProtoSumAggregate } from "../outputs/ProtoSumAggregate";

@TypeGraphQL.ObjectType("ProtoGroupBy", {
  isAbstract: true
})
export class ProtoGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

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
