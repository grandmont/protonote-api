import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeezerDataOrderByWithRelationInput } from "../../../inputs/DeezerDataOrderByWithRelationInput";
import { DeezerDataWhereInput } from "../../../inputs/DeezerDataWhereInput";
import { DeezerDataWhereUniqueInput } from "../../../inputs/DeezerDataWhereUniqueInput";
import { DeezerDataScalarFieldEnum } from "../../../../enums/DeezerDataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDeezerDataOrThrowArgs {
  @TypeGraphQL.Field(_type => DeezerDataWhereInput, {
    nullable: true
  })
  where?: DeezerDataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DeezerDataOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DeezerDataWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeezerDataWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "externalId" | "search" | "data"> | undefined;
}
