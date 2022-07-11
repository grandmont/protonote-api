import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutPropsInput } from "../inputs/ProtoCreateWithoutPropsInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateOrConnectWithoutPropsInput", {
  isAbstract: true
})
export class ProtoCreateOrConnectWithoutPropsInput {
  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutPropsInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutPropsInput;
}
