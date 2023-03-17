import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntegrationDataRelationFilter } from "../inputs/IntegrationDataRelationFilter";
import { ProtoRelationFilter } from "../inputs/ProtoRelationFilter";

@TypeGraphQL.InputType("IntegrationDataOnProtosWhereInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosWhereInput {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosWhereInput], {
    nullable: true
  })
  AND?: IntegrationDataOnProtosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosWhereInput], {
    nullable: true
  })
  OR?: IntegrationDataOnProtosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosWhereInput], {
    nullable: true
  })
  NOT?: IntegrationDataOnProtosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => ProtoRelationFilter, {
    nullable: true
  })
  proto?: ProtoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  protoId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataRelationFilter, {
    nullable: true
  })
  integrationData?: IntegrationDataRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  integrationDataId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}
