import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateNestedManyWithoutUserInput } from "../inputs/IntegrationCreateNestedManyWithoutUserInput";
import { ProtoCreateNestedManyWithoutUserInput } from "../inputs/ProtoCreateNestedManyWithoutUserInput";
import { AuthProvider } from "../../enums/AuthProvider";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  picture?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timeZone?: string | undefined;

  @TypeGraphQL.Field(_type => AuthProvider, {
    nullable: false
  })
  provider!: "GOOGLE" | "APPLE";

  @TypeGraphQL.Field(_type => ProtoCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  protos?: ProtoCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  integrations?: IntegrationCreateNestedManyWithoutUserInput | undefined;
}
