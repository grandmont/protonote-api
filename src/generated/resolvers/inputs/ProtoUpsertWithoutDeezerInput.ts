import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutDeezerInput } from "../inputs/ProtoCreateWithoutDeezerInput";
import { ProtoUpdateWithoutDeezerInput } from "../inputs/ProtoUpdateWithoutDeezerInput";

@TypeGraphQL.InputType("ProtoUpsertWithoutDeezerInput", {
  isAbstract: true
})
export class ProtoUpsertWithoutDeezerInput {
  @TypeGraphQL.Field(_type => ProtoUpdateWithoutDeezerInput, {
    nullable: false
  })
  update!: ProtoUpdateWithoutDeezerInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutDeezerInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutDeezerInput;
}
