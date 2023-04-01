import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOnProtosOrderByWithRelationInput } from "../../../inputs/DeezerDataOnProtosOrderByWithRelationInput";
import { DeezerDataOnProtosWhereInput } from "../../../inputs/DeezerDataOnProtosWhereInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../../../inputs/DeezerDataOnProtosWhereUniqueInput";
import { DeezerDataOnProtosScalarFieldEnum } from "../../../../enums/DeezerDataOnProtosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ProtoDeezerArgs {
  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereInput, {
    nullable: true
  })
  where?: DeezerDataOnProtosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DeezerDataOnProtosOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeezerDataOnProtosWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"protoId" | "deezerDataId" | "assignedAt"> | undefined;
}
