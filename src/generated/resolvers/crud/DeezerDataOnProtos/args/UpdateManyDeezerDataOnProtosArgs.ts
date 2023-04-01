import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOnProtosUpdateManyMutationInput } from "../../../inputs/DeezerDataOnProtosUpdateManyMutationInput";
import { DeezerDataOnProtosWhereInput } from "../../../inputs/DeezerDataOnProtosWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDeezerDataOnProtosArgs {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeezerDataOnProtosUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereInput, {
    nullable: true
  })
  where?: DeezerDataOnProtosWhereInput | undefined;
}
