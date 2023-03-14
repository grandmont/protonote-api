import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateManyIntegrationInputEnvelope } from "../inputs/IntegrationDataCreateManyIntegrationInputEnvelope";
import { IntegrationDataCreateOrConnectWithoutIntegrationInput } from "../inputs/IntegrationDataCreateOrConnectWithoutIntegrationInput";
import { IntegrationDataCreateWithoutIntegrationInput } from "../inputs/IntegrationDataCreateWithoutIntegrationInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataCreateNestedManyWithoutIntegrationInput", {
  isAbstract: true
})
export class IntegrationDataCreateNestedManyWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => [IntegrationDataCreateWithoutIntegrationInput], {
    nullable: true
  })
  create?: IntegrationDataCreateWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataCreateOrConnectWithoutIntegrationInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationDataCreateOrConnectWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataCreateManyIntegrationInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationDataCreateManyIntegrationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataWhereUniqueInput], {
    nullable: true
  })
  connect?: IntegrationDataWhereUniqueInput[] | undefined;
}
