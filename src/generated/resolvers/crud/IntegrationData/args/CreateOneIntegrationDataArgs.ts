import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataCreateInput } from "../../../inputs/IntegrationDataCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIntegrationDataArgs {
  @TypeGraphQL.Field(_type => IntegrationDataCreateInput, {
    nullable: false
  })
  data!: IntegrationDataCreateInput;
}
