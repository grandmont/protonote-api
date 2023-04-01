import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateOrConnectWithoutDeezerInput } from "../inputs/ProtoCreateOrConnectWithoutDeezerInput";
import { ProtoCreateWithoutDeezerInput } from "../inputs/ProtoCreateWithoutDeezerInput";
import { ProtoUpdateWithoutDeezerInput } from "../inputs/ProtoUpdateWithoutDeezerInput";
import { ProtoUpsertWithoutDeezerInput } from "../inputs/ProtoUpsertWithoutDeezerInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoUpdateOneRequiredWithoutDeezerNestedInput", {
  isAbstract: true
})
export class ProtoUpdateOneRequiredWithoutDeezerNestedInput {
  @TypeGraphQL.Field(_type => ProtoCreateWithoutDeezerInput, {
    nullable: true
  })
  create?: ProtoCreateWithoutDeezerInput | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateOrConnectWithoutDeezerInput, {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutDeezerInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpsertWithoutDeezerInput, {
    nullable: true
  })
  upsert?: ProtoUpsertWithoutDeezerInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpdateWithoutDeezerInput, {
    nullable: true
  })
  update?: ProtoUpdateWithoutDeezerInput | undefined;
}
