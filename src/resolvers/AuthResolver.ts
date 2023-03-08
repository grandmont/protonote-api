import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { AuthInput, AuthResponse } from "../schemas/Auth";
import AuthService from "../services/AuthService";
import { Context } from "../context";

@Resolver()
export default class AuthResolver {
  constructor(private authService: AuthService) {
    this.authService = new AuthService();
  }

  @Mutation(() => AuthResponse)
  async authenticate(@Arg("input") input: AuthInput, @Ctx() ctx: Context) {
    return this.authService.authenticateUser(input, ctx);
  }
}
