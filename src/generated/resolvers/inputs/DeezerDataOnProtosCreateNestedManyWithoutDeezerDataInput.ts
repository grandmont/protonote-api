import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateManyDeezerDataInputEnvelope } from "../inputs/DeezerDataOnProtosCreateManyDeezerDataInputEnvelope";
import { DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput";
import { DeezerDataOnProtosCreateWithoutDeezerDataInput } from "../inputs/DeezerDataOnProtosCreateWithoutDeezerDataInput";
import { DeezerDataOnProtosWhereUniqueInput } from "../inputs/DeezerDataOnProtosWhereUniqueInput";

@TypeGraphQL.InputType("DeezerDataOnProtosCreateNestedManyWithoutDeezerDataInput", {
  isAbstract: true
})
export class DeezerDataOnProtosCreateNestedManyWithoutDeezerDataInput {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateWithoutDeezerDataInput], {
    nullable: true
  })
  create?: DeezerDataOnProtosCreateWithoutDeezerDataInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput], {
    nullable: true
  })
  connectOrCreate?: DeezerDataOnProtosCreateOrConnectWithoutDeezerDataInput[] | undefined;

  @TypeGraphQL.Field(_type => DeezerDataOnProtosCreateManyDeezerDataInputEnvelope, {
    nullable: true
  })
  createMany?: DeezerDataOnProtosCreateManyDeezerDataInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeezerDataOnProtosWhereUniqueInput], {
    nullable: true
  })
  connect?: DeezerDataOnProtosWhereUniqueInput[] | undefined;
}
