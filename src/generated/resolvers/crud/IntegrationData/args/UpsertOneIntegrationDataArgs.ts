import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataCreateInput } from "../../../inputs/IntegrationDataCreateInput";
import { IntegrationDataUpdateInput } from "../../../inputs/IntegrationDataUpdateInput";
import { IntegrationDataWhereUniqueInput } from "../../../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIntegrationDataArgs {
  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationDataCreateInput, {
    nullable: false
  })
  create!: IntegrationDataCreateInput;

  @TypeGraphQL.Field(_type => IntegrationDataUpdateInput, {
    nullable: false
  })
  update!: IntegrationDataUpdateInput;
}
