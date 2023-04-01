import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosScalarWhereInput } from "../inputs/DeezerDataOnProtosScalarWhereInput";
import { DeezerDataOnProtosUpdateManyMutationInput } from "../inputs/DeezerDataOnProtosUpdateManyMutationInput";

@TypeGraphQL.InputType("DeezerDataOnProtosUpdateManyWithWhereWithoutDeezerDataInput", {
  isAbstract: true
})
export class DeezerDataOnProtosUpdateManyWithWhereWithoutDeezerDataInput {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosScalarWhereInput, {
    nullable: false
  })
  where!: DeezerDataOnProtosScalarWhereInput;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeezerDataOnProtosUpdateManyMutationInput;
}
