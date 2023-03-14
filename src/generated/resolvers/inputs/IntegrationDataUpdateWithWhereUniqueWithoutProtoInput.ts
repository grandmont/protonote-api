import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataUpdateWithoutProtoInput } from "../inputs/IntegrationDataUpdateWithoutProtoInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataUpdateWithWhereUniqueWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataUpdateWithWhereUniqueWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataUpdateWithoutProtoInput, {
    nullable: false
  })
  data!: IntegrationDataUpdateWithoutProtoInput;
}
