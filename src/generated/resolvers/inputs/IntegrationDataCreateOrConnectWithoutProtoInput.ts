import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateWithoutProtoInput } from "../inputs/IntegrationDataCreateWithoutProtoInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataCreateOrConnectWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataCreateOrConnectWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataCreateWithoutProtoInput, {
    nullable: false
  })
  create!: IntegrationDataCreateWithoutProtoInput;
}
