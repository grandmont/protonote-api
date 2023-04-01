import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataUpdateManyMutationInput } from "../../../inputs/DeezerDataUpdateManyMutationInput";
import { DeezerDataWhereInput } from "../../../inputs/DeezerDataWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDeezerDataArgs {
  @TypeGraphQL.Field(_type => DeezerDataUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeezerDataUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DeezerDataWhereInput, {
    nullable: true
  })
  where?: DeezerDataWhereInput | undefined;
}
