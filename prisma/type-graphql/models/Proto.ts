import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ProtoProp } from "../models/ProtoProp";
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

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  props?: ProtoProp[];

  @TypeGraphQL.Field(_type => ProtoCount, {
    nullable: true
  })
  _count?: ProtoCount | null;
}
