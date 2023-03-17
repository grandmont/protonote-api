import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateOrConnectWithoutProtosInput } from "../inputs/IntegrationDataCreateOrConnectWithoutProtosInput";
import { IntegrationDataCreateWithoutProtosInput } from "../inputs/IntegrationDataCreateWithoutProtosInput";
import { IntegrationDataUpdateWithoutProtosInput } from "../inputs/IntegrationDataUpdateWithoutProtosInput";
import { IntegrationDataUpsertWithoutProtosInput } from "../inputs/IntegrationDataUpsertWithoutProtosInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataUpdateOneRequiredWithoutProtosNestedInput", {
  isAbstract: true
})
export class IntegrationDataUpdateOneRequiredWithoutProtosNestedInput {
  @TypeGraphQL.Field(_type => IntegrationDataCreateWithoutProtosInput, {
    nullable: true
  })
  create?: IntegrationDataCreateWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataCreateOrConnectWithoutProtosInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationDataCreateOrConnectWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataUpsertWithoutProtosInput, {
    nullable: true
  })
  upsert?: IntegrationDataUpsertWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationDataWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataUpdateWithoutProtosInput, {
    nullable: true
  })
  update?: IntegrationDataUpdateWithoutProtosInput | undefined;
}
