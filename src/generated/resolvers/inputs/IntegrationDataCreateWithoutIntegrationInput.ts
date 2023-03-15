import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateNestedOneWithoutIntegrationDataInput } from "../inputs/ProtoCreateNestedOneWithoutIntegrationDataInput";

@TypeGraphQL.InputType("IntegrationDataCreateWithoutIntegrationInput", {
  isAbstract: true
})
export class IntegrationDataCreateWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  data!: string;

  @TypeGraphQL.Field(_type => ProtoCreateNestedOneWithoutIntegrationDataInput, {
    nullable: false
  })
  proto!: ProtoCreateNestedOneWithoutIntegrationDataInput;
}
