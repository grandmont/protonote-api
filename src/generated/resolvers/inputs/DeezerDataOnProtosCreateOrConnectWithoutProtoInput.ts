import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateWithoutProtoInput } from "../inputs/DeezerDataOnProtosCreateWithoutProtoInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosCreateOrConnectWithoutProtoInput", {
  isAbstract: true
})
export class DeezerDataOnProtosCreateOrConnectWithoutProtoInput {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateWithoutProtoInput, {
    nullable: false
  })
  create!: DeezerDataOnProtosCreateWithoutProtoInput;
}
