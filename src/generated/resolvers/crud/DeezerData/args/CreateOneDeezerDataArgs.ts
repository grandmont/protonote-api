import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataCreateInput } from "../../../inputs/DeezerDataCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDeezerDataArgs {
  @TypeGraphQL.Field(_type => DeezerDataCreateInput, {
    nullable: false
  })
  data!: DeezerDataCreateInput;
}
