import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosScalarWhereInput } from "../inputs/IntegrationDataOnProtosScalarWhereInput";
import { IntegrationDataOnProtosUpdateManyMutationInput } from "../inputs/IntegrationDataOnProtosUpdateManyMutationInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosUpdateManyWithWhereWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosUpdateManyWithWhereWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosScalarWhereInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosScalarWhereInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosUpdateManyMutationInput, {
    nullable: false
  })
  data!: IntegrationDataOnProtosUpdateManyMutationInput;
}
