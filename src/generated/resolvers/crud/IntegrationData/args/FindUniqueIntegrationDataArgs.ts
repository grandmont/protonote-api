import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataWhereUniqueInput } from "../../../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIntegrationDataArgs {
  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;
}
