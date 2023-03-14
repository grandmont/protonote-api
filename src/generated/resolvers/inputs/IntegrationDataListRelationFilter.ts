import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataWhereInput } from "../inputs/IntegrationDataWhereInput";

@TypeGraphQL.InputType("IntegrationDataListRelationFilter", {
  isAbstract: true
})
export class IntegrationDataListRelationFilter {
  @TypeGraphQL.Field(_type => IntegrationDataWhereInput, {
    nullable: true
  })
  every?: IntegrationDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataWhereInput, {
    nullable: true
  })
  some?: IntegrationDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataWhereInput, {
    nullable: true
  })
  none?: IntegrationDataWhereInput | undefined;
}
