import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumProtoPropEnumFilter } from "../inputs/EnumProtoPropEnumFilter";
import { IntFilter } from "../inputs/IntFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";

@TypeGraphQL.InputType("ProtoPropScalarWhereInput", {
  isAbstract: true
})
export class ProtoPropScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProtoPropScalarWhereInput], {
    nullable: true
  })
  AND?: ProtoPropScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropScalarWhereInput], {
    nullable: true
  })
  OR?: ProtoPropScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProtoPropScalarWhereInput], {
    nullable: true
  })
  NOT?: ProtoPropScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => JsonNullableFilter, {
    nullable: true
  })
  value?: JsonNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumProtoPropEnumFilter, {
    nullable: true
  })
  type?: EnumProtoPropEnumFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  protoId?: IntFilter | undefined;
}
