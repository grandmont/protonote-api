import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateManyProtoInput } from "../inputs/IntegrationDataOnProtosCreateManyProtoInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosCreateManyProtoInputEnvelope", {
  isAbstract: true
})
export class IntegrationDataOnProtosCreateManyProtoInputEnvelope {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateManyProtoInput], {
    nullable: false
  })
  data!: IntegrationDataOnProtosCreateManyProtoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
