import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropWhereUniqueInput } from "../../../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProtoPropArgs {
  @TypeGraphQL.Field(_type => ProtoPropWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoPropWhereUniqueInput;
}
