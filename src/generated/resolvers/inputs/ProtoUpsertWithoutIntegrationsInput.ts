import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutIntegrationsInput } from "../inputs/ProtoCreateWithoutIntegrationsInput";
import { ProtoUpdateWithoutIntegrationsInput } from "../inputs/ProtoUpdateWithoutIntegrationsInput";

@TypeGraphQL.InputType("ProtoUpsertWithoutIntegrationsInput", {
  isAbstract: true
})
export class ProtoUpsertWithoutIntegrationsInput {
  @TypeGraphQL.Field(_type => ProtoUpdateWithoutIntegrationsInput, {
    nullable: false
  })
  update!: ProtoUpdateWithoutIntegrationsInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutIntegrationsInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutIntegrationsInput;
}
