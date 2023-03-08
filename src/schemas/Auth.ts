import { Field, InputType, ObjectType } from 'type-graphql';
import { AuthProvider, User } from "../generated"

@InputType()
export class AuthInput {
  // Google
  @Field(() => String, { nullable: true })
  accessToken?: string

  // Apple
  @Field(() => String, { nullable: true })
  user?: string

  @Field(() => String)
  provider: AuthProvider;
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
