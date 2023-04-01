import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosAvgAggregate } from "../outputs/DeezerDataOnProtosAvgAggregate";
import { DeezerDataOnProtosCountAggregate } from "../outputs/DeezerDataOnProtosCountAggregate";
import { DeezerDataOnProtosMaxAggregate } from "../outputs/DeezerDataOnProtosMaxAggregate";
import { DeezerDataOnProtosMinAggregate } from "../outputs/DeezerDataOnProtosMinAggregate";
import { DeezerDataOnProtosSumAggregate } from "../outputs/DeezerDataOnProtosSumAggregate";

@TypeGraphQL.ObjectType("DeezerDataOnProtosGroupBy", {
  isAbstract: true
})
export class DeezerDataOnProtosGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  protoId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  deezerDataId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCountAggregate, {
    nullable: true
  })
  _count!: DeezerDataOnProtosCountAggregate | null;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosAvgAggregate, {
    nullable: true
  })
  _avg!: DeezerDataOnProtosAvgAggregate | null;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosSumAggregate, {
    nullable: true
  })
  _sum!: DeezerDataOnProtosSumAggregate | null;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosMinAggregate, {
    nullable: true
  })
  _min!: DeezerDataOnProtosMinAggregate | null;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosMaxAggregate, {
    nullable: true
  })
  _max!: DeezerDataOnProtosMaxAggregate | null;
}
