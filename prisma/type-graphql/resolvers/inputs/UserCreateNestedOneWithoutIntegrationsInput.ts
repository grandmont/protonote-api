import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutIntegrationsInput } from "../inputs/UserCreateOrConnectWithoutIntegrationsInput";
import { UserCreateWithoutIntegrationsInput } from "../inputs/UserCreateWithoutIntegrationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutIntegrationsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutIntegrationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutIntegrationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutIntegrationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
