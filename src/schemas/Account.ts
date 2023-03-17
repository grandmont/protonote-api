import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class DeleteAccountInput {
  @Field(() => Boolean)
  confirm: boolean;
}

@ObjectType()
export class DeleteAccountResponse {
  @Field(() => Boolean)
  deleted: boolean;
}
