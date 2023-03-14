import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutIntegrationDataInput } from "../inputs/ProtoCreateWithoutIntegrationDataInput";
import { ProtoUpdateWithoutIntegrationDataInput } from "../inputs/ProtoUpdateWithoutIntegrationDataInput";

@TypeGraphQL.InputType("ProtoUpsertWithoutIntegrationDataInput", {
  isAbstract: true
})
export class ProtoUpsertWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => ProtoUpdateWithoutIntegrationDataInput, {
    nullable: false
  })
  update!: ProtoUpdateWithoutIntegrationDataInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutIntegrationDataInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutIntegrationDataInput;
}
