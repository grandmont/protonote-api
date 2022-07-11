import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoWhereInput } from "../inputs/ProtoWhereInput";

@TypeGraphQL.InputType("ProtoListRelationFilter", {
  isAbstract: true
})
export class ProtoListRelationFilter {
  @TypeGraphQL.Field(_type => ProtoWhereInput, {
    nullable: true
  })
  every?: ProtoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereInput, {
    nullable: true
  })
  some?: ProtoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereInput, {
    nullable: true
  })
  none?: ProtoWhereInput | undefined;
}
