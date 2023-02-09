import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationWhereInput } from "../../../inputs/IntegrationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIntegrationArgs {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;
}
