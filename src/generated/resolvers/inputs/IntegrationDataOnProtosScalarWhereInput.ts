import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("IntegrationDataOnProtosScalarWhereInput", {
  isAbstract: true
})
export class IntegrationDataOnProtosScalarWhereInput {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarWhereInput], {
    nullable: true
  })
  AND?: IntegrationDataOnProtosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarWhereInput], {
    nullable: true
  })
  OR?: IntegrationDataOnProtosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosScalarWhereInput], {
    nullable: true
  })
  NOT?: IntegrationDataOnProtosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  protoId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  integrationDataId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}
