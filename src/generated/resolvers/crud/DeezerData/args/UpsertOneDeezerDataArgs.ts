import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataCreateInput } from "../../../inputs/DeezerDataCreateInput";
import { DeezerDataUpdateInput } from "../../../inputs/DeezerDataUpdateInput";
import { DeezerDataWhereUniqueInput } from "../../../inputs/DeezerDataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDeezerDataArgs {
  @TypeGraphQL.Field(_type => DeezerDataWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeezerDataCreateInput, {
    nullable: false
  })
  create!: DeezerDataCreateInput;

  @TypeGraphQL.Field(_type => DeezerDataUpdateInput, {
    nullable: false
  })
  update!: DeezerDataUpdateInput;
}
