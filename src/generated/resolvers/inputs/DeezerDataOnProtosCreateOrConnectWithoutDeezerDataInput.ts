import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosCreateWithoutDeezerDataInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput", {
  isAbstract: true
})
export class DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateWithoutDeezerDataInput, {
    nullable: false
  })
  create!: DeezerDataOnProtosCreateWithoutDeezerDataInput;
}
