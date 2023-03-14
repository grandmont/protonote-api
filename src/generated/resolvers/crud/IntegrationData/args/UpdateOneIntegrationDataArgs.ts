import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataUpdateInput } from "../../../inputs/IntegrationDataUpdateInput";
import { IntegrationDataWhereUniqueInput } from "../../../inputs/IntegrationDataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIntegrationDataArgs {
  @TypeGraphQL.Field(_type => IntegrationDataUpdateInput, {
    nullable: false
  })
  data!: IntegrationDataUpdateInput;

  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationDataWhereUniqueInput;
}
