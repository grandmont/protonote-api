import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutIntegrationsInput } from "../inputs/UserCreateWithoutIntegrationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutIntegrationsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutIntegrationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutIntegrationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutIntegrationsInput;
}
