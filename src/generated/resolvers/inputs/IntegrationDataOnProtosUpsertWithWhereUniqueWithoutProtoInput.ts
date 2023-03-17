import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateWithoutProtoInput } from "../inputs/IntegrationDataOnProtosCreateWithoutProtoInput";
import { IntegrationDataOnProtosUpdateWithoutProtoInput } from "../inputs/IntegrationDataOnProtosUpdateWithoutProtoInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosUpsertWithWhereUniqueWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosUpsertWithWhereUniqueWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosUpdateWithoutProtoInput, {
    nullable: false
  })
  update!: IntegrationDataOnProtosUpdateWithoutProtoInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateWithoutProtoInput, {
    nullable: false
  })
  create!: IntegrationDataOnProtosCreateWithoutProtoInput;
}
