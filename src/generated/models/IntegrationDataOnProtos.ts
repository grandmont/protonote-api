import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { IntegrationData } from "../models/IntegrationData";
import { Proto } from "../models/Proto";

@TypeGraphQL.ObjectType("IntegrationDataOnProtos", {
  isAbstract: true
})
export class IntegrationDataOnProtos {
  proto?: Proto;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  protoId!: number;

  integrationData?: IntegrationData;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  integrationDataId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;
}
