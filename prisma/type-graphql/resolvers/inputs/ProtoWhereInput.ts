import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProtoPropListRelationFilter } from "../inputs/ProtoPropListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ProtoWhereInput", {
  isAbstract: true
})
export class ProtoWhereInput {
  @TypeGraphQL.Field(_type => [ProtoWhereInput], {
    nullable: true
  })
  AND?: ProtoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoWhereInput], {
    nullable: true
  })
  OR?: ProtoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoWhereInput], {
    nullable: true
  })
  NOT?: ProtoWhereInput[] | undefined;

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
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ProtoPropListRelationFilter, {
    nullable: true
  })
  props?: ProtoPropListRelationFilter | undefined;
}
