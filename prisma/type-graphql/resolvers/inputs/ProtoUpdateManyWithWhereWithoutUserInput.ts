import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoScalarWhereInput } from "../inputs/ProtoScalarWhereInput";
import { ProtoUpdateManyMutationInput } from "../inputs/ProtoUpdateManyMutationInput";

@TypeGraphQL.InputType("ProtoUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ProtoUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ProtoScalarWhereInput, {
    nullable: false
  })
  where!: ProtoScalarWhereInput;

  @TypeGraphQL.Field(_type => ProtoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProtoUpdateManyMutationInput;
}
