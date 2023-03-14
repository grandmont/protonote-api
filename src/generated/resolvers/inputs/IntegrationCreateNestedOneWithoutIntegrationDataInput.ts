import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateOrConnectWithoutIntegrationDataInput } from "../inputs/IntegrationCreateOrConnectWithoutIntegrationDataInput";
import { IntegrationCreateWithoutIntegrationDataInput } from "../inputs/IntegrationCreateWithoutIntegrationDataInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateNestedOneWithoutIntegrationDataInput", {
  isAbstract: true
})
export class IntegrationCreateNestedOneWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => IntegrationCreateWithoutIntegrationDataInput, {
    nullable: true
  })
  create?: IntegrationCreateWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateOrConnectWithoutIntegrationDataInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationCreateOrConnectWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationWhereUniqueInput | undefined;
}
