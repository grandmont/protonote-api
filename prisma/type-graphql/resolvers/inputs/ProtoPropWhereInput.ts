import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumProtoPropEnumFilter } from "../inputs/EnumProtoPropEnumFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProtoRelationFilter } from "../inputs/ProtoRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ProtoPropWhereInput", {
  isAbstract: true
})
export class ProtoPropWhereInput {
  @TypeGraphQL.Field(_type => [ProtoPropWhereInput], {
    nullable: true
  })
  AND?: ProtoPropWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropWhereInput], {
    nullable: true
  })
  OR?: ProtoPropWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropWhereInput], {
    nullable: true
  })
  NOT?: ProtoPropWhereInput[] | undefined;

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
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumProtoPropEnumFilter, {
    nullable: true
  })
  type?: EnumProtoPropEnumFilter | undefined;

  @TypeGraphQL.Field(_type => ProtoRelationFilter, {
    nullable: true
  })
  proto?: ProtoRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  protoId?: IntFilter | undefined;
}
