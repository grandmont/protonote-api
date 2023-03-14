import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataCreateManyInput } from "../../../inputs/IntegrationDataCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIntegrationDataArgs {
  @TypeGraphQL.Field(_type => [IntegrationDataCreateManyInput], {
    nullable: false
  })
  data!: IntegrationDataCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
