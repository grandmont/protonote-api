import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOrderByWithRelationInput } from "../../../inputs/IntegrationDataOrderByWithRelationInput";
import { IntegrationDataWhereInput } from "../../../inputs/IntegrationDataWhereInput";
import { IntegrationDataWhereUniqueInput } from "../../../inputs/IntegrationDataWhereUniqueInput";
import { IntegrationDataScalarFieldEnum } from "../../../../enums/IntegrationDataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstIntegrationDataArgs {
  @TypeGraphQL.Field(_type => IntegrationDataWhereInput, {
    nullable: true
  })
  where?: IntegrationDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IntegrationDataOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataWhereUniqueInput, {
    nullable: true
  })
  cursor?: IntegrationDataWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "externalId" | "search" | "data"> | undefined;
}
