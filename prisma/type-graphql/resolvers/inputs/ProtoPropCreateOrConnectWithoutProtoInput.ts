import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropCreateWithoutProtoInput } from "../inputs/ProtoPropCreateWithoutProtoInput";
import { ProtoPropWhereUniqueInput } from "../inputs/ProtoPropWhereUniqueInput";

@TypeGraphQL.InputType("ProtoPropCreateOrConnectWithoutProtoInput", {
  isAbstract: true
})
export class ProtoPropCreateOrConnectWithoutProtoInput {
  @TypeGraphQL.Field(_type => ProtoPropWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoPropWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoPropCreateWithoutProtoInput, {
    nullable: false
  })
  create!: ProtoPropCreateWithoutProtoInput;
}
