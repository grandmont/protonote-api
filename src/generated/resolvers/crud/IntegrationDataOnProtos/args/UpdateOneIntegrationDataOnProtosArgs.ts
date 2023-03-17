import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOnProtosUpdateInput } from "../../../inputs/IntegrationDataOnProtosUpdateInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../../../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIntegrationDataOnProtosArgs {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosUpdateInput, {
    nullable: false
  })
  data!: IntegrationDataOnProtosUpdateInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosWhereUniqueInput;
}
