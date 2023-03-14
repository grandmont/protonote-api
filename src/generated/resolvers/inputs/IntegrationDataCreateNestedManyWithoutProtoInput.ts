import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateManyProtoInputEnvelope } from "../inputs/IntegrationDataCreateManyProtoInputEnvelope";
import { IntegrationDataCreateOrConnectWithoutProtoInput } from "../inputs/IntegrationDataCreateOrConnectWithoutProtoInput";
import { IntegrationDataCreateWithoutProtoInput } from "../inputs/IntegrationDataCreateWithoutProtoInput";
import { IntegrationDataWhereUniqueInput } from "../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationDataCreateNestedManyWithoutProtoInput", {
  isAbstract: true
})
export class IntegrationDataCreateNestedManyWithoutProtoInput {
  @TypeGraphQL.Field(_type => [IntegrationDataCreateWithoutProtoInput], {
    nullable: true
  })
  create?: IntegrationDataCreateWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataCreateOrConnectWithoutProtoInput], {
    nullable: true
  })
  connectOrCreate?: IntegrationDataCreateOrConnectWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataCreateManyProtoInputEnvelope, {
    nullable: true
  })
  createMany?: IntegrationDataCreateManyProtoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataWhereUniqueInput], {
    nullable: true
  })
  connect?: IntegrationDataWhereUniqueInput[] | undefined;
}
