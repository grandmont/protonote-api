import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateWithoutProtoInput } from "../inputs/DeezerDataOnProtosCreateWithoutProtoInput";
import { DeezerDataOnProtosUpdateWithoutProtoInput } from "../inputs/DeezerDataOnProtosUpdateWithoutProtoInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpsertWithWhereUniqueWithoutProtoInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpsertWithWhereUniqueWithoutProtoInput {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosUpdateWithoutProtoInput, {
    nullable: false
  })
  update!: DeezerDataOnProtosUpdateWithoutProtoInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateWithoutProtoInput, {
    nullable: false
  })
  create!: DeezerDataOnProtosCreateWithoutProtoInput;
}
