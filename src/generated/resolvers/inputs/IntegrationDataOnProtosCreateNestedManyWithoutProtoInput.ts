import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateManyProtoInputEnvelope } from "../inputs/IntegrationDataOnProtosCreateManyProtoInputEnvelope";
import { IntegrationDataOnProtosCreateOrConnectWithoutProtoInput } from "../inputs/IntegrationDataOnProtosCreateOrConnectWithoutProtoInput";
import { IntegrationDataOnProtosCreateWithoutProtoInput } from "../inputs/IntegrationDataOnProtosCreateWithoutProtoInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataOnProtosCreateNestedManyWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosCreateNestedManyWithoutProtoInput {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateWithoutProtoInput], {
    nullable: true
  })
  create?: IntegrationDataOnProtosCreateWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateOrConnectWithoutProtoInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationDataOnProtosCreateOrConnectWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateManyProtoInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationDataOnProtosCreateManyProtoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  connect?: IntegrationDataOnProtosWhereUniqueInput[] | undefined;
}
