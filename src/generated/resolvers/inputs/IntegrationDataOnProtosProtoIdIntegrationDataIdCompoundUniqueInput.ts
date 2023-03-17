import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IntegrationDataOnProtosProtoIdIntegrationDataIdCompoundUniqueInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosProtoIdIntegrationDataIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  protoId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  integrationDataId!: number;
}
