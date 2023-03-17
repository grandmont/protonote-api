import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOnProtosWhereUniqueInput } from "../../../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIntegrationDataOnProtosArgs {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosWhereUniqueInput;
}
