import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosWhereInput } from "../inputs/DeezerDataOnProtosWhereInput";

@TypeGraphQL.InputType("DeezerDataOnProtosListRelationFilter", {
  isAbstract: true
})
export class DeezerDataOnProtosListRelationFilter {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereInput, {
    nullable: true
  })
  every?: DeezerDataOnProtosWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereInput, {
    nullable: true
  })
  some?: DeezerDataOnProtosWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereInput, {
    nullable: true
  })
  none?: DeezerDataOnProtosWhereInput | undefined;
}
