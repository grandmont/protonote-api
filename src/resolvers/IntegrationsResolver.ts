import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { IntegrationsInput, IntegrationsResponse } from "../schemas/Integrations";
import IntegrationsService from "../services/IntegrationsService";
import { Context } from "../context";

@Resolver()
export default class IntegrationsResolver {
  constructor(private integrationsService: IntegrationsService) {
    this.integrationsService = new IntegrationsService();
  }

  @Mutation(() => IntegrationsResponse)
  async registerIntegration(@Arg("input") input: IntegrationsInput, @Ctx() ctx: Context) {
    return this.integrationsService.registerIntegration(input, ctx);
  }
}
