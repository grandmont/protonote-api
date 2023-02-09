import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoUpdateWithoutUserInput } from "../inputs/ProtoUpdateWithoutUserInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ProtoUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ProtoUpdateWithoutUserInput;
}
