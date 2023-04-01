import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosProtoIdDeezerDataIdCompoundUniqueInput } from "../inputs/DeezerDataOnProtosProtoIdDeezerDataIdCompoundUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosWhereUniqueInput", {
  isAbstract: true
})
export class DeezerDataOnProtosWhereUniqueInput {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosProtoIdDeezerDataIdCompoundUniqueInput, {
    nullable: true
  })
  protoId_deezerDataId?: DeezerDataOnProtosProtoIdDeezerDataIdCompoundUniqueInput | undefined;
}
