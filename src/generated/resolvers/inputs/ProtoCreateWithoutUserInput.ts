import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataCreateNestedManyWithoutProtoInput } from "../inputs/IntegrationDataCreateNestedManyWithoutProtoInput";

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dateString?: string | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataCreateNestedManyWithoutProtoInput, {
    nullable: true
  })
  IntegrationData?: IntegrationDataCreateNestedManyWithoutProtoInput | undefined;
}
