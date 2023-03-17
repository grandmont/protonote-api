import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationDataOnProtosCreateManyInput } from "../../../inputs/IntegrationDataOnProtosCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIntegrationDataOnProtosArgs {
  @TypeGraphQL.Field(_type => [IntegrationDataOnProtosCreateManyInput], {
    nullable: false
  })
  data!: IntegrationDataOnProtosCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
