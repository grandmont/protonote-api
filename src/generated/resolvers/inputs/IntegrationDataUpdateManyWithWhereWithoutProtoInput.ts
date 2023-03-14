import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataScalarWhereInput } from "../inputs/IntegrationDataScalarWhereInput";
import { IntegrationDataUpdateManyMutationInput } from "../inputs/IntegrationDataUpdateManyMutationInput";

@TypeGraphQL.InputType("IntegrationDataUpdateManyWithWhereWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataUpdateManyWithWhereWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataScalarWhereInput, {
    nullable: false
  })
  where!: IntegrationDataScalarWhereInput;

  @TypeGraphQL.Field(_type => IntegrationDataUpdateManyMutationInput, {
    nullable: false
  })
  data!: IntegrationDataUpdateManyMutationInput;
}
