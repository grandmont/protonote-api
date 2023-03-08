import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthProvider } from "../../enums/AuthProvider";

@TypeGraphQL.InputType("NestedEnumAuthProviderFilter", {
  isAbstract: true
})
export class NestedEnumAuthProviderFilter {
  @TypeGraphQL.Field(_type => AuthProvider, {
    nullable: true
  })
  equals?: "GOOGLE" | "APPLE" | undefined;

  @TypeGraphQL.Field(_type => [AuthProvider], {
    nullable: true
  })
  in?: Array<"GOOGLE" | "APPLE"> | undefined;

  @TypeGraphQL.Field(_type => [AuthProvider], {
    nullable: true
  })
  notIn?: Array<"GOOGLE" | "APPLE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAuthProviderFilter, {
    nullable: true
  })
  not?: NestedEnumAuthProviderFilter | undefined;
}
