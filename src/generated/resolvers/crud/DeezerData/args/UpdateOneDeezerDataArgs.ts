import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataUpdateInput } from "../../../inputs/DeezerDataUpdateInput";
import { DeezerDataWhereUniqueInput } from "../../../inputs/DeezerDataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDeezerDataArgs {
  @TypeGraphQL.Field(_type => DeezerDataUpdateInput, {
    nullable: false
  })
  data!: DeezerDataUpdateInput;

  @TypeGraphQL.Field(_type => DeezerDataWhereUniqueInput, {
    nullable: false
  })
  where!: DeezerDataWhereUniqueInput;
}
