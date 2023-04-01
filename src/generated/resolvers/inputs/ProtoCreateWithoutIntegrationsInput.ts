import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateNestedManyWithoutProtoInput } from "../inputs/DeezerDataOnProtosCreateNestedManyWithoutProtoInput";
import { UserCreateNestedOneWithoutProtosInput } from "../inputs/UserCreateNestedOneWithoutProtosInput";

@TypeGraphQL.InputType("ProtoCreateWithoutIntegrationsInput", {
  isAbstract: true
})
export class ProtoCreateWithoutIntegrationsInput {
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

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateNestedManyWithoutProtoInput, {
    nullable: true
  })
  deezer?: DeezerDataOnProtosCreateNestedManyWithoutProtoInput | undefined;
}
