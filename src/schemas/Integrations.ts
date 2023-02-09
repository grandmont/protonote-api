import { Field, InputType, ObjectType } from "type-graphql";
import { Integration, IntegrationProvider } from "@generated/type-graphql"

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

@InputType()
export class SpotifyInput {
  @Field(() => String, { nullable: true })
  code?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;
}

@ObjectType()
export class SpotifyResponse {
  @Field(() => String)
  accessToken: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;
}
