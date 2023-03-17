import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { IntegrationDataOnProtos } from "../models/IntegrationDataOnProtos";
import { User } from "../models/User";
import { ProtoCount } from "../resolvers/outputs/ProtoCount";

@TypeGraphQL.ObjectType("Proto", {
  isAbstract: true
})
export class Proto {
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
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dateString?: string | null;

  user?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId?: number | null;

  integrations?: IntegrationDataOnProtos[];

  @TypeGraphQL.Field(_type => ProtoCount, {
    nullable: true
  })
  _count?: ProtoCount | null;
}
