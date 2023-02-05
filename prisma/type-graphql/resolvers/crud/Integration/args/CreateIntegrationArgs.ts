import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationCreateInput } from "../../../inputs/IntegrationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationCreateInput, {
    nullable: false
  })
  data!: IntegrationCreateInput;
}
