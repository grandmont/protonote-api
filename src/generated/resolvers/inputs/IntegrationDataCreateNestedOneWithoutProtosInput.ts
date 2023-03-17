import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateOrConnectWithoutProtosInput } from "../inputs/IntegrationDataCreateOrConnectWithoutProtosInput";
import { IntegrationDataCreateWithoutProtosInput } from "../inputs/IntegrationDataCreateWithoutProtosInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataCreateNestedOneWithoutProtosInput", {
  isAbstract: true
})
export class IntegrationDataCreateNestedOneWithoutProtosInput {
  @TypeGraphQL.Field(_type => IntegrationDataCreateWithoutProtosInput, {
    nullable: true
  })
  create?: IntegrationDataCreateWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataCreateOrConnectWithoutProtosInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationDataCreateOrConnectWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationDataWhereUniqueInput | undefined;
}
