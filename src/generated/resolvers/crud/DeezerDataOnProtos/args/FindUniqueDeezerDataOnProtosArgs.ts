import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOnProtosWhereUniqueInput } from "../../../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDeezerDataOnProtosArgs {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosWhereUniqueInput;
}
