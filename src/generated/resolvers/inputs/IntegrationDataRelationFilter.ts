import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataWhereInput } from "../inputs/IntegrationDataWhereInput";

@TypeGraphQL.InputType("IntegrationDataRelationFilter", {
  isAbstract: true
})
export class IntegrationDataRelationFilter {
  @TypeGraphQL.Field(_type => IntegrationDataWhereInput, {
    nullable: true
  })
  is?: IntegrationDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataWhereInput, {
    nullable: true
  })
  isNot?: IntegrationDataWhereInput | undefined;
}
