import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import DeezerService from "../services/DeezerService";
import ValidateToken from "../middlewares/ValidateToken";
import {
  IntegrationsResponse,
  RegisterIntegrationInput,
} from "../schemas/Integrations";
import { Context } from "../context";

@Resolver()
export default class DeezerIntegration {
  constructor(private deezerService: DeezerService) {
    this.deezerService = new DeezerService();
  }

  @Mutation(() => IntegrationsResponse)
  @UseMiddleware(ValidateToken)
  async registerDeezer(
    @Arg("input") input: RegisterIntegrationInput,
    @Ctx() ctx: Context
  ) {
    return this.deezerService.registerDeezer(input, ctx);
  }
}
