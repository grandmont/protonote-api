import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateOrConnectWithoutIntegrationDataInput } from "../inputs/ProtoCreateOrConnectWithoutIntegrationDataInput";
import { ProtoCreateWithoutIntegrationDataInput } from "../inputs/ProtoCreateWithoutIntegrationDataInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateNestedOneWithoutIntegrationDataInput", {
  isAbstract: true
})
export class ProtoCreateNestedOneWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => ProtoCreateWithoutIntegrationDataInput, {
    nullable: true
  })
  create?: ProtoCreateWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateOrConnectWithoutIntegrationDataInput, {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutIntegrationDataInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput | undefined;
}
