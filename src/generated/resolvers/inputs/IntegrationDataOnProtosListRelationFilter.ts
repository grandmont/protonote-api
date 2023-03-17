import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosWhereInput } from "../inputs/IntegrationDataOnProtosWhereInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosListRelationFilter", {
  isAbstract: true
})
export class IntegrationDataOnProtosListRelationFilter {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereInput, {
    nullable: true
  })
  every?: IntegrationDataOnProtosWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereInput, {
    nullable: true
  })
  some?: IntegrationDataOnProtosWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereInput, {
    nullable: true
  })
  none?: IntegrationDataOnProtosWhereInput | undefined;
}
