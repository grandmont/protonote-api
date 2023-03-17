import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { DeleteAccountInput, DeleteAccountResponse } from "../schemas/Account";
import AccountService from "../services/AccountService";
import { Context } from "../context";
import ValidateToken from "../middlewares/ValidateToken";

@Resolver()
export default class AccountResolver {
  constructor(private accountService: AccountService) {
    this.accountService = new AccountService();
  }

  @Mutation(() => DeleteAccountResponse)
  @UseMiddleware(ValidateToken)
  async deleteAccount(
    @Arg("input") input: DeleteAccountInput,
    @Ctx() ctx: Context
  ) {
    return this.accountService.deleteAccount(input, ctx);
  }
}
