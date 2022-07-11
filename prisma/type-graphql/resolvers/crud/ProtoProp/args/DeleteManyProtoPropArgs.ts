import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropWhereInput } from "../../../inputs/ProtoPropWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProtoPropArgs {
  @TypeGraphQL.Field(_type => ProtoPropWhereInput, {
    nullable: true
  })
  where?: ProtoPropWhereInput | undefined;
}
