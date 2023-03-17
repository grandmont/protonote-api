import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateOrConnectWithoutIntegrationsInput } from "../inputs/ProtoCreateOrConnectWithoutIntegrationsInput";
import { ProtoCreateWithoutIntegrationsInput } from "../inputs/ProtoCreateWithoutIntegrationsInput";
import { ProtoUpdateWithoutIntegrationsInput } from "../inputs/ProtoUpdateWithoutIntegrationsInput";
import { ProtoUpsertWithoutIntegrationsInput } from "../inputs/ProtoUpsertWithoutIntegrationsInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoUpdateOneRequiredWithoutIntegrationsNestedInput", {
  isAbstract: true
})
export class ProtoUpdateOneRequiredWithoutIntegrationsNestedInput {
  @TypeGraphQL.Field(_type => ProtoCreateWithoutIntegrationsInput, {
    nullable: true
  })
  create?: ProtoCreateWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateOrConnectWithoutIntegrationsInput, {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpsertWithoutIntegrationsInput, {
    nullable: true
  })
  upsert?: ProtoUpsertWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpdateWithoutIntegrationsInput, {
    nullable: true
  })
  update?: ProtoUpdateWithoutIntegrationsInput | undefined;
}
