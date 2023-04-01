import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataCreateOrConnectWithoutProtosInput } from "../inputs/DeezerDataCreateOrConnectWithoutProtosInput";
import { DeezerDataCreateWithoutProtosInput } from "../inputs/DeezerDataCreateWithoutProtosInput";
import { DeezerDataUpdateWithoutProtosInput } from "../inputs/DeezerDataUpdateWithoutProtosInput";
import { DeezerDataUpsertWithoutProtosInput } from "../inputs/DeezerDataUpsertWithoutProtosInput";
import { DeezerDataWhereUniqueInput } from "../inputs/DeezerDataWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataUpdateOneRequiredWithoutProtosNestedInput", {
  isAbstract: true
})
export class DeezerDataUpdateOneRequiredWithoutProtosNestedInput {
  @TypeGraphQL.Field(_type => DeezerDataCreateWithoutProtosInput, {
    nullable: true
  })
  create?: DeezerDataCreateWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataCreateOrConnectWithoutProtosInput, {
    nullable: true
  })
  connectOrCreate?: DeezerDataCreateOrConnectWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataUpsertWithoutProtosInput, {
    nullable: true
  })
  upsert?: DeezerDataUpsertWithoutProtosInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataWhereUniqueInput, {
    nullable: true
  })
  connect?: DeezerDataWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DeezerDataUpdateWithoutProtosInput, {
    nullable: true
  })
  update?: DeezerDataUpdateWithoutProtosInput | undefined;
}
