import {
  Arg,
  Ctx,
  Field,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";

import { Context } from "../context";
import ValidateToken from "../middlewares/ValidateToken";
import { User } from "../generated";

@ObjectType()
export class LogResponse {
  @Field(() => String)
  message: string;

  @Field(() => User)
  user: User;
}

@Resolver()
export default class SystemResolver {
  @Query(() => LogResponse)
  @UseMiddleware(ValidateToken)
  async log(@Arg("message") message: String, @Ctx() ctx: Context) {
    const logResponse = {
      message,
      user: ctx.req.user,
    };

    console.log(logResponse);

    return logResponse;
  }
}
