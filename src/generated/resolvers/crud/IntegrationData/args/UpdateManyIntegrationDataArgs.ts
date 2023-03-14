import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataUpdateManyMutationInput } from "../../../inputs/IntegrationDataUpdateManyMutationInput";
import { IntegrationDataWhereInput } from "../../../inputs/IntegrationDataWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIntegrationDataArgs {
  @TypeGraphQL.Field(_type => IntegrationDataUpdateManyMutationInput, {
    nullable: false
  })
  data!: IntegrationDataUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IntegrationDataWhereInput, {
    nullable: true
  })
  where?: IntegrationDataWhereInput | undefined;
}
