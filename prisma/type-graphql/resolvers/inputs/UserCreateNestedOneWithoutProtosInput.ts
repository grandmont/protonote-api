import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProtosInput } from "../inputs/UserCreateOrConnectWithoutProtosInput";
import { UserCreateWithoutProtosInput } from "../inputs/UserCreateWithoutProtosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutProtosInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutProtosInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProtosInput, {
    nullable: true
  })
  create?: UserCreateWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProtosInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
