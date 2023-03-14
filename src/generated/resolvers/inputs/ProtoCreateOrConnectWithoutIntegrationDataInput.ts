import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateWithoutIntegrationDataInput } from "../inputs/ProtoCreateWithoutIntegrationDataInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoCreateOrConnectWithoutIntegrationDataInput", {
  isAbstract: true
})
export class ProtoCreateOrConnectWithoutIntegrationDataInput {
  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: false
  })
  where!: ProtoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProtoCreateWithoutIntegrationDataInput, {
    nullable: false
  })
  create!: ProtoCreateWithoutIntegrationDataInput;
}
