import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import ValidateToken from "../middlewares/ValidateToken";
import {
  IntegrationsResponse,
  RegisterIntegrationInput,
} from "../schemas/Integrations";
import { Context } from "../context";
import YouTubeService from "../services/YouTubeService";

@Resolver()
export default class YouTubeIntegration {
  constructor(private youtubeService: YouTubeService) {
    this.youtubeService = new YouTubeService();
  }

  @Mutation(() => IntegrationsResponse)
  @UseMiddleware(ValidateToken)
  async registerYouTube(
    @Arg("input") input: RegisterIntegrationInput,
    @Ctx() ctx: Context
  ) {
    return this.youtubeService.registerYouTube(input, ctx);
  }
}
