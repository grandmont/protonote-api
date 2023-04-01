import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosUpdateWithoutProtoInput } from "../inputs/DeezerDataOnProtosUpdateWithoutProtoInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpdateWithWhereUniqueWithoutProtoInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpdateWithWhereUniqueWithoutProtoInput {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosUpdateWithoutProtoInput, {
    nullable: false
  })
  data!: DeezerDataOnProtosUpdateWithoutProtoInput;
}
