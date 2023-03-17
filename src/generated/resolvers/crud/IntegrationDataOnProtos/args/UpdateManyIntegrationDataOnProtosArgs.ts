import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOnProtosUpdateManyMutationInput } from "../../../inputs/IntegrationDataOnProtosUpdateManyMutationInput";
import { IntegrationDataOnProtosWhereInput } from "../../../inputs/IntegrationDataOnProtosWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIntegrationDataOnProtosArgs {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosUpdateManyMutationInput, {
    nullable: false
  })
  data!: IntegrationDataOnProtosUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereInput, {
    nullable: true
  })
  where?: IntegrationDataOnProtosWhereInput | undefined;
}
