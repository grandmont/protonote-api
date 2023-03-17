import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutIntegrationsInput } from "../inputs/UserCreateOrConnectWithoutIntegrationsInput";
import { UserCreateWithoutIntegrationsInput } from "../inputs/UserCreateWithoutIntegrationsInput";
import { UserUpdateWithoutIntegrationsInput } from "../inputs/UserUpdateWithoutIntegrationsInput";
import { UserUpsertWithoutIntegrationsInput } from "../inputs/UserUpsertWithoutIntegrationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutIntegrationsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutIntegrationsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutIntegrationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutIntegrationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutIntegrationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutIntegrationsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutIntegrationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutIntegrationsInput | undefined;
}
