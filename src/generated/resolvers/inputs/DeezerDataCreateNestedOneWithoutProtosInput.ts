import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataCreateOrConnectWithoutProtosInput } from "../inputs/DeezerDataCreateOrConnectWithoutProtosInput";
import { DeezerDataCreateWithoutProtosInput } from "../inputs/DeezerDataCreateWithoutProtosInput";
import { DeezerDataWhereUniqueInput } from "../inputs/DeezerDataWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataCreateNestedOneWithoutProtosInput", {
  isAbstract: true
})
export class DeezerDataCreateNestedOneWithoutProtosInput {
  @TypeGraphQL.Field(_type => DeezerDataCreateWithoutProtosInput, {
    nullable: true
  })
  create?: DeezerDataCreateWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataCreateOrConnectWithoutProtosInput, {
    nullable: true
  })
  connectOrCreate?: DeezerDataCreateOrConnectWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataWhereUniqueInput, {
    nullable: true
  })
  connect?: DeezerDataWhereUniqueInput | undefined;
}
