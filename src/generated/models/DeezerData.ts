import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { DeezerDataOnProtos } from "../models/DeezerDataOnProtos";
import { DeezerDataCount } from "../resolvers/outputs/DeezerDataCount";

@TypeGraphQL.ObjectType("DeezerData", {
  isAbstract: true
})
export class DeezerData {
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

  protos?: DeezerDataOnProtos[];

  @TypeGraphQL.Field(_type => DeezerDataCount, {
    nullable: true
  })
  _count?: DeezerDataCount | null;
}
