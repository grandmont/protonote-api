import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DeezerDataOnProtosListRelationFilter } from "../inputs/DeezerDataOnProtosListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("DeezerDataWhereInput", {
  isAbstract: true
})
export class DeezerDataWhereInput {
  @TypeGraphQL.Field(_type => [DeezerDataWhereInput], {
    nullable: true
  })
  AND?: DeezerDataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataWhereInput], {
    nullable: true
  })
  OR?: DeezerDataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataWhereInput], {
    nullable: true
  })
  NOT?: DeezerDataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  externalId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  search?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  data?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosListRelationFilter, {
    nullable: true
  })
  protos?: DeezerDataOnProtosListRelationFilter | undefined;
}
