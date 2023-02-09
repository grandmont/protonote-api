import { Field, InputType, ObjectType } from 'type-graphql';
import { User } from "../generated"

@InputType()
export class AuthInput {
  @Field(() => String)
  accessToken: string;
}

@ObjectType()
export class AuthResponse {
  @Field(() => String)
  status: string;

  @Field(() => User)
  user: User;

  @Field(() => String)
  access_token: string;
}
