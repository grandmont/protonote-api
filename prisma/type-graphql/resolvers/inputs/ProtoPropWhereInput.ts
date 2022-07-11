import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumProtoPropTypeFilter } from "../inputs/EnumProtoPropTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumProtoPropTypeFilter, {
    nullable: true
  })
  type?: EnumProtoPropTypeFilter | undefined;
}
