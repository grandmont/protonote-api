import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationCreateManyInput } from "../../../inputs/IntegrationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIntegrationArgs {
  @TypeGraphQL.Field(_type => [IntegrationCreateManyInput], {
    nullable: false
  })
  data!: IntegrationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
