import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataAvgAggregate } from "../outputs/DeezerDataAvgAggregate";
import { DeezerDataCountAggregate } from "../outputs/DeezerDataCountAggregate";
import { DeezerDataMaxAggregate } from "../outputs/DeezerDataMaxAggregate";
import { DeezerDataMinAggregate } from "../outputs/DeezerDataMinAggregate";
import { DeezerDataSumAggregate } from "../outputs/DeezerDataSumAggregate";

@TypeGraphQL.ObjectType("AggregateDeezerData", {
  isAbstract: true
})
export class AggregateDeezerData {
  @TypeGraphQL.Field(_type => DeezerDataCountAggregate, {
    nullable: true
  })
  _count!: DeezerDataCountAggregate | null;

  @TypeGraphQL.Field(_type => DeezerDataAvgAggregate, {
    nullable: true
  })
  _avg!: DeezerDataAvgAggregate | null;

  @TypeGraphQL.Field(_type => DeezerDataSumAggregate, {
    nullable: true
  })
  _sum!: DeezerDataSumAggregate | null;

  @TypeGraphQL.Field(_type => DeezerDataMinAggregate, {
    nullable: true
  })
  _min!: DeezerDataMinAggregate | null;

  @TypeGraphQL.Field(_type => DeezerDataMaxAggregate, {
    nullable: true
  })
  _max!: DeezerDataMaxAggregate | null;
}
