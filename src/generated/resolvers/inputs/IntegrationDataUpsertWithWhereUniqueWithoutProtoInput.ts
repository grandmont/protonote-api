import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateWithoutProtoInput } from "../inputs/IntegrationDataCreateWithoutProtoInput";
import { IntegrationDataUpdateWithoutProtoInput } from "../inputs/IntegrationDataUpdateWithoutProtoInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataUpsertWithWhereUniqueWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataUpsertWithWhereUniqueWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataUpdateWithoutProtoInput, {
    nullable: false
  })
  update!: IntegrationDataUpdateWithoutProtoInput;

  @TypeGraphQL.Field(_type => IntegrationDataCreateWithoutProtoInput, {
    nullable: false
  })
  create!: IntegrationDataCreateWithoutProtoInput;
}
