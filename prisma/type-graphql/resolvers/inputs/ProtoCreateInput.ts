import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutProtosInput } from "../inputs/UserCreateNestedOneWithoutProtosInput";

@TypeGraphQL.InputType("ProtoCreateInput", {
  isAbstract: true
})
export class ProtoCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProtosInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProtosInput;
}
