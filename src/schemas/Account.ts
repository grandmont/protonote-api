import { Field, ObjectType } from "type-graphql";
import { User } from "../generated";

@ObjectType()
export class DeleteAccountResponse {
  @Field(() => Boolean)
  deleted: boolean;

  @Field(() => User)
  user: User;
}
