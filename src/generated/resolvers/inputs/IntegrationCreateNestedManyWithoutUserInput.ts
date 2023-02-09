import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateManyUserInputEnvelope } from "../inputs/IntegrationCreateManyUserInputEnvelope";
import { IntegrationCreateOrConnectWithoutUserInput } from "../inputs/IntegrationCreateOrConnectWithoutUserInput";
import { IntegrationCreateWithoutUserInput } from "../inputs/IntegrationCreateWithoutUserInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class IntegrationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [IntegrationCreateWithoutUserInput], {
    nullable: true
  })
  create?: IntegrationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IntegrationWhereUniqueInput], {
    nullable: true
  })
  connect?: IntegrationWhereUniqueInput[] | undefined;
}
