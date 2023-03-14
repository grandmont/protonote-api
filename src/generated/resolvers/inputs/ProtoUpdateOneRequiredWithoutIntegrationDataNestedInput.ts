import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateOrConnectWithoutIntegrationDataInput } from "../inputs/ProtoCreateOrConnectWithoutIntegrationDataInput";
import { ProtoCreateWithoutIntegrationDataInput } from "../inputs/ProtoCreateWithoutIntegrationDataInput";
import { ProtoUpdateWithoutIntegrationDataInput } from "../inputs/ProtoUpdateWithoutIntegrationDataInput";
import { ProtoUpsertWithoutIntegrationDataInput } from "../inputs/ProtoUpsertWithoutIntegrationDataInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoUpdateOneRequiredWithoutIntegrationDataNestedInput", {
  isAbstract: true
})
export class ProtoUpdateOneRequiredWithoutIntegrationDataNestedInput {
  @TypeGraphQL.Field(_type => ProtoCreateWithoutIntegrationDataInput, {
    nullable: true
  })
  create?: ProtoCreateWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateOrConnectWithoutIntegrationDataInput, {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpsertWithoutIntegrationDataInput, {
    nullable: true
  })
  upsert?: ProtoUpsertWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpdateWithoutIntegrationDataInput, {
    nullable: true
  })
  update?: ProtoUpdateWithoutIntegrationDataInput | undefined;
}
