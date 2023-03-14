import { Field, InputType, ObjectType } from "type-graphql";
import { Integration, IntegrationProvider } from "../generated";

@InputType()
export class IntegrationsInput {
  @Field(() => String)
  accessToken: string;

  @Field(() => IntegrationProvider)
  provider: IntegrationProvider;
}

@ObjectType()
export class IntegrationsResponse {
  @Field(() => String)
  status: string;

  @Field(() => Integration)
  integration: Integration;
}