import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateWithoutProtoInput } from "../inputs/IntegrationDataOnProtosCreateWithoutProtoInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosCreateOrConnectWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosCreateOrConnectWithoutProtoInput {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateWithoutProtoInput, {
    nullable: false
  })
  create!: IntegrationDataOnProtosCreateWithoutProtoInput;
}
