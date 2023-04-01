import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateManyProtoInputEnvelope } from "../inputs/DeezerDataOnProtosCreateManyProtoInputEnvelope";
import { DeezerDataOnProtosCreateOrConnectWithoutProtoInput } from "../inputs/DeezerDataOnProtosCreateOrConnectWithoutProtoInput";
import { DeezerDataOnProtosCreateWithoutProtoInput } from "../inputs/DeezerDataOnProtosCreateWithoutProtoInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosCreateNestedManyWithoutProtoInput", {
  isAbstract: true
})
export class DeezerDataOnProtosCreateNestedManyWithoutProtoInput {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateWithoutProtoInput], {
    nullable: true
  })
  create?: DeezerDataOnProtosCreateWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateOrConnectWithoutProtoInput], {
    nullable: true
  })
  connectOrCreate?: DeezerDataOnProtosCreateOrConnectWithoutProtoInput[] | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateManyProtoInputEnvelope, {
    nullable: true
  })
  createMany?: DeezerDataOnProtosCreateManyProtoInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  connect?: DeezerDataOnProtosWhereUniqueInput[] | undefined;
}
