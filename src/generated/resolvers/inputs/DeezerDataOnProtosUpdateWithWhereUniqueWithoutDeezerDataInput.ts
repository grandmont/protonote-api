import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosUpdateWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosUpdateWithoutDeezerDataInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpdateWithWhereUniqueWithoutDeezerDataInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpdateWithWhereUniqueWithoutDeezerDataInput {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosUpdateWithoutDeezerDataInput, {
    nullable: false
  })
  data!: DeezerDataOnProtosUpdateWithoutDeezerDataInput;
}
