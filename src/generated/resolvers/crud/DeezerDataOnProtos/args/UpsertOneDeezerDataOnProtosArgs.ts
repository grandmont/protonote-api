import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOnProtosCreateInput } from "../../../inputs/DeezerDataOnProtosCreateInput";
import { DeezerDataOnProtosUpdateInput } from "../../../inputs/DeezerDataOnProtosUpdateInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../../../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDeezerDataOnProtosArgs {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateInput, {
    nullable: false
  })
  create!: DeezerDataOnProtosCreateInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosUpdateInput, {
    nullable: false
  })
  update!: DeezerDataOnProtosUpdateInput;
}
