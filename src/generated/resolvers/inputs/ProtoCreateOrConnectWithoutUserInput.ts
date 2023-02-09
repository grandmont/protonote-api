import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutUserInput } from "../inputs/ProtoCreateWithoutUserInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ProtoCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutUserInput;
}
