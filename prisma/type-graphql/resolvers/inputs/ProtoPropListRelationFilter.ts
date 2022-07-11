import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropWhereInput } from "../inputs/ProtoPropWhereInput";

@TypeGraphQL.InputType("ProtoPropListRelationFilter", {
  isAbstract: true
})
export class ProtoPropListRelationFilter {
  @TypeGraphQL.Field(_type => ProtoPropWhereInput, {
    nullable: true
  })
  every?: ProtoPropWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProtoPropWhereInput, {
    nullable: true
  })
  some?: ProtoPropWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProtoPropWhereInput, {
    nullable: true
  })
  none?: ProtoPropWhereInput | undefined;
}
