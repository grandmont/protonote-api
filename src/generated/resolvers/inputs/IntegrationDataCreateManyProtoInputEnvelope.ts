import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateManyProtoInput } from "../inputs/IntegrationDataCreateManyProtoInput";

@TypeGraphQL.InputType("IntegrationDataCreateManyProtoInputEnvelope", {
  isAbstract: true
})
export class IntegrationDataCreateManyProtoInputEnvelope {
  @TypeGraphQL.Field(_type => [IntegrationDataCreateManyProtoInput], {
    nullable: false
  })
  data!: IntegrationDataCreateManyProtoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
