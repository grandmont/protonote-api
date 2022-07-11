import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
