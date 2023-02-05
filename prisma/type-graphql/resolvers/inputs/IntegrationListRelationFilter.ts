import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationWhereInput } from "../inputs/IntegrationWhereInput";

@TypeGraphQL.InputType("IntegrationListRelationFilter", {
  isAbstract: true
})
export class IntegrationListRelationFilter {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  every?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  some?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  none?: IntegrationWhereInput | undefined;
}
