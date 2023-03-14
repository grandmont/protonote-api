import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataWhereInput } from "../../../inputs/IntegrationDataWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIntegrationDataArgs {
  @TypeGraphQL.Field(_type => IntegrationDataWhereInput, {
    nullable: true
  })
  where?: IntegrationDataWhereInput | undefined;
}
