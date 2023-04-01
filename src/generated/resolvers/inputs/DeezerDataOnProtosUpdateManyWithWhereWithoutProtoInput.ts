import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosScalarWhereInput } from "../inputs/DeezerDataOnProtosScalarWhereInput";
import { DeezerDataOnProtosUpdateManyMutationInput } from "../inputs/DeezerDataOnProtosUpdateManyMutationInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpdateManyWithWhereWithoutProtoInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpdateManyWithWhereWithoutProtoInput {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosScalarWhereInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosScalarWhereInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeezerDataOnProtosUpdateManyMutationInput;
}
