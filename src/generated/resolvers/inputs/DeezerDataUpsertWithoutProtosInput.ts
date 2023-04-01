import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataCreateWithoutProtosInput } from "../inputs/DeezerDataCreateWithoutProtosInput";
import { DeezerDataUpdateWithoutProtosInput } from "../inputs/DeezerDataUpdateWithoutProtosInput";

@TypeGraphQL.InputType("DeezerDataUpsertWithoutProtosInput", {
  isAbstract: true
})
export class DeezerDataUpsertWithoutProtosInput {
  @TypeGraphQL.Field(_type => DeezerDataUpdateWithoutProtosInput, {
    nullable: false
  })
  update!: DeezerDataUpdateWithoutProtosInput;

  @TypeGraphQL.Field(_type => DeezerDataCreateWithoutProtosInput, {
    nullable: false
  })
  create!: DeezerDataCreateWithoutProtosInput;
}
