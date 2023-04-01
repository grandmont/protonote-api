import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataCreateWithoutProtosInput } from "../inputs/DeezerDataCreateWithoutProtosInput";
import { DeezerDataWhereUniqueInput } from "../inputs/DeezerDataWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataCreateOrConnectWithoutProtosInput", {
  isAbstract: true
})
export class DeezerDataCreateOrConnectWithoutProtosInput {
  @TypeGraphQL.Field(_type => DeezerDataWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeezerDataCreateWithoutProtosInput, {
    nullable: false
  })
  create!: DeezerDataCreateWithoutProtosInput;
}
