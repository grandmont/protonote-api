import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutUserInput } from "../inputs/ProtoCreateWithoutUserInput";
import { ProtoUpdateWithoutUserInput } from "../inputs/ProtoUpdateWithoutUserInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ProtoUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ProtoUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutUserInput;
}
