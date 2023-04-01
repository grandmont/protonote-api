import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DeezerDataRelationFilter } from "../inputs/DeezerDataRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProtoRelationFilter } from "../inputs/ProtoRelationFilter";

@TypeGraphQL.InputType("DeezerDataOnProtosWhereInput", {
  isAbstract: true
})
export class DeezerDataOnProtosWhereInput {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosWhereInput], {
    nullable: true
  })
  AND?: DeezerDataOnProtosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosWhereInput], {
    nullable: true
  })
  OR?: DeezerDataOnProtosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosWhereInput], {
    nullable: true
  })
  NOT?: DeezerDataOnProtosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => ProtoRelationFilter, {
    nullable: true
  })
  proto?: ProtoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  protoId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DeezerDataRelationFilter, {
    nullable: true
  })
  deezerData?: DeezerDataRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  deezerDataId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}
