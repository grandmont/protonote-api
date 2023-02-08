import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoCreateManyUserInput } from "../inputs/ProtoCreateManyUserInput";

@TypeGraphQL.InputType("ProtoCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ProtoCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ProtoCreateManyUserInput], {
    nullable: false
  })
  data!: ProtoCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
