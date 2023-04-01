import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutDeezerInput } from "../inputs/ProtoCreateWithoutDeezerInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateOrConnectWithoutDeezerInput", {
  isAbstract: true
})
export class ProtoCreateOrConnectWithoutDeezerInput {
  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutDeezerInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutDeezerInput;
}
