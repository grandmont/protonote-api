import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOnProtosUpdateInput } from "../../../inputs/DeezerDataOnProtosUpdateInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../../../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDeezerDataOnProtosArgs {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosUpdateInput, {
    nullable: false
  })
  data!: DeezerDataOnProtosUpdateInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosWhereUniqueInput;
}
