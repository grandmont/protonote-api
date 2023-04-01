import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosCreateWithoutDeezerDataInput";
import { DeezerDataOnProtosUpdateWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosUpdateWithoutDeezerDataInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpsertWithWhereUniqueWithoutDeezerDataInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpsertWithWhereUniqueWithoutDeezerDataInput {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosUpdateWithoutDeezerDataInput, {
    nullable: false
  })
  update!: DeezerDataOnProtosUpdateWithoutDeezerDataInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateWithoutDeezerDataInput, {
    nullable: false
  })
  create!: DeezerDataOnProtosCreateWithoutDeezerDataInput;
}
