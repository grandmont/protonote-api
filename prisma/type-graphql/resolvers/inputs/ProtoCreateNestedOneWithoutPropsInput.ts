import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateOrConnectWithoutPropsInput } from "../inputs/ProtoCreateOrConnectWithoutPropsInput";
import { ProtoCreateWithoutPropsInput } from "../inputs/ProtoCreateWithoutPropsInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateNestedOneWithoutPropsInput", {
  isAbstract: true
})
export class ProtoCreateNestedOneWithoutPropsInput {
  @TypeGraphQL.Field(_type => ProtoCreateWithoutPropsInput, {
    nullable: true
  })
  create?: ProtoCreateWithoutPropsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateOrConnectWithoutPropsInput, {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutPropsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput | undefined;
}
