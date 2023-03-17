import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutIntegrationsInput } from "../inputs/ProtoCreateWithoutIntegrationsInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateOrConnectWithoutIntegrationsInput", {
  isAbstract: true
})
export class ProtoCreateOrConnectWithoutIntegrationsInput {
  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutIntegrationsInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutIntegrationsInput;
}
