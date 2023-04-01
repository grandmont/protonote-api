import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateManyDeezerDataInput } from "../inputs/DeezerDataOnProtosCreateManyDeezerDataInput";

@TypeGraphQL.InputType("DeezerDataOnProtosCreateManyDeezerDataInputEnvelope", {
  isAbstract: true
})
export class DeezerDataOnProtosCreateManyDeezerDataInputEnvelope {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateManyDeezerDataInput], {
    nullable: false
  })
  data!: DeezerDataOnProtosCreateManyDeezerDataInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
