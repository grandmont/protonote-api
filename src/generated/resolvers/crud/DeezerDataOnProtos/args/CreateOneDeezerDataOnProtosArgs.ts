import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOnProtosCreateInput } from "../../../inputs/DeezerDataOnProtosCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDeezerDataOnProtosArgs {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateInput, {
    nullable: false
  })
  data!: DeezerDataOnProtosCreateInput;
}
