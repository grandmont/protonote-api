import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataCreateManyInput } from "../../../inputs/DeezerDataCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDeezerDataArgs {
  @TypeGraphQL.Field(_type => [DeezerDataCreateManyInput], {
    nullable: false
  })
  data!: DeezerDataCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
