import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("DeezerDataOnProtosScalarWhereInput", {
  isAbstract: true
})
export class DeezerDataOnProtosScalarWhereInput {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarWhereInput], {
    nullable: true
  })
  AND?: DeezerDataOnProtosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarWhereInput], {
    nullable: true
  })
  OR?: DeezerDataOnProtosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarWhereInput], {
    nullable: true
  })
  NOT?: DeezerDataOnProtosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  protoId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  deezerDataId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}
