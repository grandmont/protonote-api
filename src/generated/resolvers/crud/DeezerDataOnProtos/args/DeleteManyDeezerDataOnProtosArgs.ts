import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOnProtosWhereInput } from "../../../inputs/DeezerDataOnProtosWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDeezerDataOnProtosArgs {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereInput, {
    nullable: true
  })
  where?: DeezerDataOnProtosWhereInput | undefined;
}
