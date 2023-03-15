import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import {
  IntegrationsInput,
  IntegrationsResponse,
} from "../schemas/Integrations";
import IntegrationsService from "../services/IntegrationsService";
import SpotifyService from "../services/SpotifyService";
import { Context } from "../context";
import ValidateToken from "../middlewares/ValidateToken";

@Resolver()
export default class IntegrationsResolver {
  constructor(
    private integrationsService: IntegrationsService,
  ) {
    this.integrationsService = new IntegrationsService();
  }

  // General integrations
  @Mutation(() => IntegrationsResponse)
  @UseMiddleware(ValidateToken)
  async registerIntegration(
    @Arg("input") input: IntegrationsInput,
    @Ctx() ctx: Context
  ) {
    return this.integrationsService.registerIntegration(input, ctx);
  }
}
