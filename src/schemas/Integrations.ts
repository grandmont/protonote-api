import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
export class IntegrationsInput {
  @Field(() => String)
  accessToken: string;
}

@ObjectType()
export class IntegrationsResponse {
  @Field(() => String)
  status: string;
}
