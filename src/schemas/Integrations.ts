import { Field, InputType, ObjectType } from "type-graphql";
import { Integration, IntegrationProvider } from "../generated";

@InputType()
export class RegisterIntegrationInput {
  @Field(() => String, { nullable: true })
  code?: string;

  @Field(() => String, { nullable: true })
  redirectUri?: string;

  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => String, { nullable: true })
  dateString?: string;
}

@InputType()
export class IntegrationsInput {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken?: string;

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
