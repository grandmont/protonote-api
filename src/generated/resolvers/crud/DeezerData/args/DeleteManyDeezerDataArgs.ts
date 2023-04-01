import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataWhereInput } from "../../../inputs/DeezerDataWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDeezerDataArgs {
  @TypeGraphQL.Field(_type => DeezerDataWhereInput, {
    nullable: true
  })
  where?: DeezerDataWhereInput | undefined;
}
