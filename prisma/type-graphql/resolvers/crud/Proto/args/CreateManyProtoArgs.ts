import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoCreateManyInput } from "../../../inputs/ProtoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProtoArgs {
  @TypeGraphQL.Field(_type => [ProtoCreateManyInput], {
    nullable: false
  })
  data!: ProtoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
