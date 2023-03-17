import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOnProtosOrderByWithRelationInput } from "../../../inputs/IntegrationDataOnProtosOrderByWithRelationInput";
import { IntegrationDataOnProtosWhereInput } from "../../../inputs/IntegrationDataOnProtosWhereInput";
import { IntegrationDataOnProtosWhereUniqueInput } from "../../../inputs/IntegrationDataOnProtosWhereUniqueInput";
import { IntegrationDataOnProtosScalarFieldEnum } from "../../../../enums/IntegrationDataOnProtosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyIntegrationDataOnProtosArgs {
  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereInput, {
    nullable: true
  })
  where?: IntegrationDataOnProtosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IntegrationDataOnProtosOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosWhereUniqueInput, {
    nullable: true
  })
  cursor?: IntegrationDataOnProtosWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"protoId" | "integrationDataId" | "assignedAt"> | undefined;
}
