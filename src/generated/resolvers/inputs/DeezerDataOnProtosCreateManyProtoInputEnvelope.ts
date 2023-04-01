import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeezerDataOnProtosCreateManyProtoInput } from "../inputs/DeezerDataOnProtosCreateManyProtoInput";

@TypeGraphQL.InputType("DeezerDataOnProtosCreateManyProtoInputEnvelope", {
  isAbstract: true
})
export class DeezerDataOnProtosCreateManyProtoInputEnvelope {
  @TypeGraphQL.Field(_type => [DeezerDataOnProtosCreateManyProtoInput], {
    nullable: false
  })
  data!: DeezerDataOnProtosCreateManyProtoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
