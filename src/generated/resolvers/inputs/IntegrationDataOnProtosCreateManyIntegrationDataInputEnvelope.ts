import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateManyIntegrationDataInput } from "../inputs/IntegrationDataOnProtosCreateManyIntegrationDataInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope", {
  isAbstract: true
})
export class IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateManyIntegrationDataInput], {
    nullable: false
  })
  data!: IntegrationDataOnProtosCreateManyIntegrationDataInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
