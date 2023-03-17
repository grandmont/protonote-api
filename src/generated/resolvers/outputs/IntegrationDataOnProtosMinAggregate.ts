import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("IntegrationDataOnProtosMinAggregate", {
  isAbstract: true
})
export class IntegrationDataOnProtosMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  protoId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  integrationDataId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt!: Date | null;
}
