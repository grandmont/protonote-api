import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateOrConnectWithoutIntegrationsInput } from "../inputs/ProtoCreateOrConnectWithoutIntegrationsInput";
import { ProtoCreateWithoutIntegrationsInput } from "../inputs/ProtoCreateWithoutIntegrationsInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateNestedOneWithoutIntegrationsInput", {
  isAbstract: true
})
export class ProtoCreateNestedOneWithoutIntegrationsInput {
  @TypeGraphQL.Field(_type => ProtoCreateWithoutIntegrationsInput, {
    nullable: true
  })
  create?: ProtoCreateWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateOrConnectWithoutIntegrationsInput, {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput | undefined;
}
