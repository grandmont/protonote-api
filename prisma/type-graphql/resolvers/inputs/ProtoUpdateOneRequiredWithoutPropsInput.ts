import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateOrConnectWithoutPropsInput } from "../inputs/ProtoCreateOrConnectWithoutPropsInput";
import { ProtoCreateWithoutPropsInput } from "../inputs/ProtoCreateWithoutPropsInput";
import { ProtoUpdateWithoutPropsInput } from "../inputs/ProtoUpdateWithoutPropsInput";
import { ProtoUpsertWithoutPropsInput } from "../inputs/ProtoUpsertWithoutPropsInput";
import { ProtoWhereUniqueInput } from "../inputs/ProtoWhereUniqueInput";

@TypeGraphQL.InputType("ProtoUpdateOneRequiredWithoutPropsInput", {
  isAbstract: true
})
export class ProtoUpdateOneRequiredWithoutPropsInput {
  @TypeGraphQL.Field(_type => ProtoCreateWithoutPropsInput, {
    nullable: true
  })
  create?: ProtoCreateWithoutPropsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoCreateOrConnectWithoutPropsInput, {
    nullable: true
  })
  connectOrCreate?: ProtoCreateOrConnectWithoutPropsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpsertWithoutPropsInput, {
    nullable: true
  })
  upsert?: ProtoUpsertWithoutPropsInput | undefined;

  @TypeGraphQL.Field(_type => ProtoWhereUniqueInput, {
    nullable: true
  })
  connect?: ProtoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProtoUpdateWithoutPropsInput, {
    nullable: true
  })
  update?: ProtoUpdateWithoutPropsInput | undefined;
}
