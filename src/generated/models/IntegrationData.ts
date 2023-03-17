import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { IntegrationDataOnProtos } from "../models/IntegrationDataOnProtos";
import { IntegrationDataCount } from "../resolvers/outputs/IntegrationDataCount";

@TypeGraphQL.ObjectType("IntegrationData", {
  isAbstract: true
})
export class IntegrationData {
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
  externalId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  data!: string;

  protos?: IntegrationDataOnProtos[];

  @TypeGraphQL.Field(_type => IntegrationDataCount, {
    nullable: true
  })
  _count?: IntegrationDataCount | null;
}
