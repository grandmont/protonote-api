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

@InputType()
export class UpdateDeviceInput {
  @Field(() => String)
  timeZone: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;
}

@ObjectType()
export class UpdateDeviceResponse {
  @Field(() => Boolean)
  status: boolean;
}
