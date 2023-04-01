import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateOrConnectWithoutDeezerInput } from "../inputs/ProtoCreateOrConnectWithoutDeezerInput";
import { ProtoCreateWithoutDeezerInput } from "../inputs/ProtoCreateWithoutDeezerInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateNestedOneWithoutDeezerInput", {
  isAbstract: true
})
export class ProtoCreateNestedOneWithoutDeezerInput {
  @TypeGraphQL.Field(_type => ProtoCreateWithoutDeezerInput, {
    nullable: true
  })
  create?: ProtoCreateWithoutDeezerInput | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateOrConnectWithoutDeezerInput, {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutDeezerInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput | undefined;
}
