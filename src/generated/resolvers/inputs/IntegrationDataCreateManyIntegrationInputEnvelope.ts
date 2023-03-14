import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateManyIntegrationInput } from "../inputs/IntegrationDataCreateManyIntegrationInput";

@TypeGraphQL.InputType("IntegrationDataCreateManyIntegrationInputEnvelope", {
  isAbstract: true
})
export class IntegrationDataCreateManyIntegrationInputEnvelope {
  @TypeGraphQL.Field(_type => [IntegrationDataCreateManyIntegrationInput], {
    nullable: false
  })
  data!: IntegrationDataCreateManyIntegrationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
