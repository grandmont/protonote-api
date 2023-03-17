import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOnProtosWhereInput } from "../../../inputs/IntegrationDataOnProtosWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIntegrationDataOnProtosArgs {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereInput, {
    nullable: true
  })
  where?: IntegrationDataOnProtosWhereInput | undefined;
}
