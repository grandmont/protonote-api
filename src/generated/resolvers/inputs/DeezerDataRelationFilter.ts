import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataWhereInput } from "../inputs/DeezerDataWhereInput";

@TypeGraphQL.InputType("DeezerDataRelationFilter", {
  isAbstract: true
})
export class DeezerDataRelationFilter {
  @TypeGraphQL.Field(_type => DeezerDataWhereInput, {
    nullable: true
  })
  is?: DeezerDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataWhereInput, {
    nullable: true
  })
  isNot?: DeezerDataWhereInput | undefined;
}
