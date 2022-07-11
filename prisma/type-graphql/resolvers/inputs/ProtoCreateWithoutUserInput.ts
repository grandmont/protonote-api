import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropCreateNestedManyWithoutProtoInput } from "../inputs/ProtoPropCreateNestedManyWithoutProtoInput";

@TypeGraphQL.InputType("ProtoCreateWithoutUserInput", {
  isAbstract: true
})
export class ProtoCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => ProtoPropCreateNestedManyWithoutProtoInput, {
    nullable: true
  })
  props?: ProtoPropCreateNestedManyWithoutProtoInput | undefined;
}
