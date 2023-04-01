import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataWhereUniqueInput } from "../../../inputs/DeezerDataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDeezerDataOrThrowArgs {
  @TypeGraphQL.Field(_type => DeezerDataWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataWhereUniqueInput;
}
