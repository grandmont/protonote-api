import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope } from "../inputs/IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope";
import { IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput";
import { IntegrationDataOnProtosCreateWithoutIntegrationDataInput } from "../inputs/IntegrationDataOnProtosCreateWithoutIntegrationDataInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosCreateNestedManyWithoutIntegrationDataInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosCreateNestedManyWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateWithoutIntegrationDataInput], {
    nullable: true
  })
  create?: IntegrationDataOnProtosCreateWithoutIntegrationDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  connect?: IntegrationDataOnProtosWhereUniqueInput[] | undefined;
}
