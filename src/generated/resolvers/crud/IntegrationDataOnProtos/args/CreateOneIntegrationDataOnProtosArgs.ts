import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOnProtosCreateInput } from "../../../inputs/IntegrationDataOnProtosCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIntegrationDataOnProtosArgs {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateInput, {
    nullable: false
  })
  data!: IntegrationDataOnProtosCreateInput;
}
