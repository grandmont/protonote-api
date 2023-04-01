import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationDataOnProtosCreateNestedManyWithoutProtoInput } from "../inputs/IntegrationDataOnProtosCreateNestedManyWithoutProtoInput";
import { UserCreateNestedOneWithoutProtosInput } from "../inputs/UserCreateNestedOneWithoutProtosInput";

@TypeGraphQL.InputType("ProtoCreateWithoutDeezerInput", {
  isAbstract: true
})
export class ProtoCreateWithoutDeezerInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProtosInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationDataOnProtosCreateNestedManyWithoutProtoInput, {
    nullable: true
  })
  integrations?: IntegrationDataOnProtosCreateNestedManyWithoutProtoInput | undefined;
}
