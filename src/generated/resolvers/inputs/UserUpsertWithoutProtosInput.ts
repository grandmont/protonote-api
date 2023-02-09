import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProtosInput } from "../inputs/UserCreateWithoutProtosInput";
import { UserUpdateWithoutProtosInput } from "../inputs/UserUpdateWithoutProtosInput";

@TypeGraphQL.InputType("UserUpsertWithoutProtosInput", {
  isAbstract: true
})
export class UserUpsertWithoutProtosInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProtosInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProtosInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProtosInput, {
    nullable: false
  })
  create!: UserCreateWithoutProtosInput;
}
