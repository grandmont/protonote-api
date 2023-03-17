import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosProtoIdIntegrationDataIdCompoundUniqueInput } from "../inputs/IntegrationDataOnProtosProtoIdIntegrationDataIdCompoundUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosWhereUniqueInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosWhereUniqueInput {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosProtoIdIntegrationDataIdCompoundUniqueInput, {
    nullable: true
  })
  protoId_integrationDataId?: IntegrationDataOnProtosProtoIdIntegrationDataIdCompoundUniqueInput | undefined;
}
