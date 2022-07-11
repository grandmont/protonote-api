import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProtoPropCreateManyProtoInput } from "../inputs/ProtoPropCreateManyProtoInput";

@TypeGraphQL.InputType("ProtoPropCreateManyProtoInputEnvelope", {
  isAbstract: true
})
export class ProtoPropCreateManyProtoInputEnvelope {
  @TypeGraphQL.Field(_type => [ProtoPropCreateManyProtoInput], {
    nullable: false
  })
  data!: ProtoPropCreateManyProtoInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
