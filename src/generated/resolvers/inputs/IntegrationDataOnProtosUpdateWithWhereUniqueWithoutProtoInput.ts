import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosUpdateWithoutProtoInput } from "../inputs/IntegrationDataOnProtosUpdateWithoutProtoInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosUpdateWithWhereUniqueWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosUpdateWithWhereUniqueWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosUpdateWithoutProtoInput, {
    nullable: false
  })
  data!: IntegrationDataOnProtosUpdateWithoutProtoInput;
}
