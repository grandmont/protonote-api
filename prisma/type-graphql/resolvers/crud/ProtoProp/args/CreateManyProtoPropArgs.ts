import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropCreateManyInput } from "../../../inputs/ProtoPropCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProtoPropArgs {
  @TypeGraphQL.Field(_type => [ProtoPropCreateManyInput], {
    nullable: false
  })
  data!: ProtoPropCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
