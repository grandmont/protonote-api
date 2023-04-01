import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { DeezerData } from "../models/DeezerData";
import { Proto } from "../models/Proto";

@TypeGraphQL.ObjectType("DeezerDataOnProtos", {
  isAbstract: true
})
export class DeezerDataOnProtos {
  proto?: Proto;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  protoId!: number;

  deezerData?: DeezerData;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  deezerDataId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;
}
