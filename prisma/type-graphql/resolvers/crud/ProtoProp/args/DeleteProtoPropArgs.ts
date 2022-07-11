import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropWhereUniqueInput } from "../../../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProtoPropArgs {
  @TypeGraphQL.Field(_type => ProtoPropWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoPropWhereUniqueInput;
}
