import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthProvider } from "../../enums/AuthProvider";

@TypeGraphQL.InputType("EnumAuthProviderFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumAuthProviderFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => AuthProvider, {
    nullable: true
  })
  set?: "GOOGLE" | "APPLE" | undefined;
}
