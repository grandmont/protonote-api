import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutIntegrationsInput } from "../inputs/UserCreateWithoutIntegrationsInput";
import { UserUpdateWithoutIntegrationsInput } from "../inputs/UserUpdateWithoutIntegrationsInput";

@TypeGraphQL.InputType("UserUpsertWithoutIntegrationsInput", {
  isAbstract: true
})
export class UserUpsertWithoutIntegrationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutIntegrationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutIntegrationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutIntegrationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutIntegrationsInput;
}
