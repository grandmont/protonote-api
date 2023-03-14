import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateOrConnectWithoutIntegrationDataInput } from "../inputs/IntegrationCreateOrConnectWithoutIntegrationDataInput";
import { IntegrationCreateWithoutIntegrationDataInput } from "../inputs/IntegrationCreateWithoutIntegrationDataInput";
import { IntegrationUpdateWithoutIntegrationDataInput } from "../inputs/IntegrationUpdateWithoutIntegrationDataInput";
import { IntegrationUpsertWithoutIntegrationDataInput } from "../inputs/IntegrationUpsertWithoutIntegrationDataInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationUpdateOneRequiredWithoutIntegrationDataNestedInput", {
  isAbstract: true
})
export class IntegrationUpdateOneRequiredWithoutIntegrationDataNestedInput {
  @TypeGraphQL.Field(_type => IntegrationCreateWithoutIntegrationDataInput, {
    nullable: true
  })
  create?: IntegrationCreateWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateOrConnectWithoutIntegrationDataInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationCreateOrConnectWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpsertWithoutIntegrationDataInput, {
    nullable: true
  })
  upsert?: IntegrationUpsertWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpdateWithoutIntegrationDataInput, {
    nullable: true
  })
  update?: IntegrationUpdateWithoutIntegrationDataInput | undefined;
}
