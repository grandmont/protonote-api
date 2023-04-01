import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOnProtosCreateManyInput } from "../../../inputs/DeezerDataOnProtosCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDeezerDataOnProtosArgs {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateManyInput], {
    nullable: false
  })
  data!: DeezerDataOnProtosCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
