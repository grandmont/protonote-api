import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import {
  DeleteAccountInput,
  DeleteAccountResponse,
  UpdateDeviceResponse,
  UpdateDeviceInput,
} from "../schemas/Account";
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
    return await this.accountService.deleteAccount(input, ctx);
  }

  @Mutation(() => UpdateDeviceResponse)
  @UseMiddleware(ValidateToken)
  async updateDevice(
    @Arg("input") input: UpdateDeviceInput,
    @Ctx() ctx: Context
  ) {
    console.log("what");
    return await this.accountService.updateDevice(input, ctx);
  }
}
