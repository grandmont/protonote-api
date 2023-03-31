import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationOrderByWithRelationInput } from "../../../inputs/IntegrationOrderByWithRelationInput";
import { IntegrationWhereInput } from "../../../inputs/IntegrationWhereInput";
import { IntegrationWhereUniqueInput } from "../../../inputs/IntegrationWhereUniqueInput";
import { IntegrationScalarFieldEnum } from "../../../../enums/IntegrationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstIntegrationOrThrowArgs {
  @TypeGraphQL.Field(_type => IntegrationWhereInput, {
    nullable: true
  })
  where?: IntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IntegrationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IntegrationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  cursor?: IntegrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IntegrationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "provider" | "status" | "refreshToken" | "userId"> | undefined;
}
