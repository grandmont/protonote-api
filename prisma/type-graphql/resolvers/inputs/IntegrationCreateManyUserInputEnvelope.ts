import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateManyUserInput } from "../inputs/IntegrationCreateManyUserInput";

@TypeGraphQL.InputType("IntegrationCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class IntegrationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [IntegrationCreateManyUserInput], {
    nullable: false
  })
  data!: IntegrationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
