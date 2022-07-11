import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropScalarWhereInput } from "../inputs/ProtoPropScalarWhereInput";
import { ProtoPropUpdateManyMutationInput } from "../inputs/ProtoPropUpdateManyMutationInput";

@TypeGraphQL.InputType("ProtoPropUpdateManyWithWhereWithoutProtoInput", {
  isAbstract: true
})
export class ProtoPropUpdateManyWithWhereWithoutProtoInput {
  @TypeGraphQL.Field(_type => ProtoPropScalarWhereInput, {
    nullable: false
  })
  where!: ProtoPropScalarWhereInput;

  @TypeGraphQL.Field(_type => ProtoPropUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProtoPropUpdateManyMutationInput;
}
