import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAuthProviderFilter } from "../inputs/NestedEnumAuthProviderFilter";
import { AuthProvider } from "../../enums/AuthProvider";

@TypeGraphQL.InputType("EnumAuthProviderFilter", {
  isAbstract: true
})
export class EnumAuthProviderFilter {
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
