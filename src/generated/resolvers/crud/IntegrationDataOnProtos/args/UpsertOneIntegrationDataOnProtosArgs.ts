import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOnProtosCreateInput } from "../../../inputs/IntegrationDataOnProtosCreateInput";
import { IntegrationDataOnProtosUpdateInput } from "../../../inputs/IntegrationDataOnProtosUpdateInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../../../inputs/IntegrationDataOnProtosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIntegrationDataOnProtosArgs {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataOnProtosWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateInput, {
    nullable: false
  })
  create!: IntegrationDataOnProtosCreateInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosUpdateInput, {
    nullable: false
  })
  update!: IntegrationDataOnProtosUpdateInput;
}
