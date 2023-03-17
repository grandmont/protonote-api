import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IntegrationDataCreateWithoutProtosInput", {
  isAbstract: true
})
export class IntegrationDataCreateWithoutProtosInput {
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
  externalId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  data!: string;
}
