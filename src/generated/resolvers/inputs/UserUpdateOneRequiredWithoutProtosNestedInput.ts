import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProtosInput } from "../inputs/UserCreateOrConnectWithoutProtosInput";
import { UserCreateWithoutProtosInput } from "../inputs/UserCreateWithoutProtosInput";
import { UserUpdateWithoutProtosInput } from "../inputs/UserUpdateWithoutProtosInput";
import { UserUpsertWithoutProtosInput } from "../inputs/UserUpsertWithoutProtosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutProtosNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutProtosNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProtosInput, {
    nullable: true
  })
  create?: UserCreateWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProtosInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutProtosInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutProtosInput, {
    nullable: true
  })
  update?: UserUpdateWithoutProtosInput | undefined;
}
