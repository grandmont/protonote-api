import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import {
  IntegrationsInput,
  IntegrationsResponse,
} from "../schemas/Integrations";
import {
  GetPlaybackStateResponse,
  SpotifyInput,
  SpotifyResponse
} from "../schemas/SpotifySchema";
import IntegrationsService from "../services/IntegrationsService";
import SpotifyService from "../services/SpotifyService";
import { Context } from "../context";
import ValidateToken from "../middlewares/ValidateToken";

@Resolver()
export default class IntegrationsResolver {
  constructor(
    private integrationsService: IntegrationsService,
    private spotifyService: SpotifyService
  ) {
    this.integrationsService = new IntegrationsService();
    this.spotifyService = new SpotifyService();
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

  // Spotify
  @Mutation(() => SpotifyResponse)
  @UseMiddleware(ValidateToken)
  async swapSpotifyCode(
    @Arg("input") input: SpotifyInput,
    @Ctx() ctx: Context
  ) {
    return this.spotifyService.swapSpotifyCode(input);
  }

  @Mutation(() => SpotifyResponse)
  async refreshSpotifyAccessToken(
    @Arg("input") input: SpotifyInput,
    @Ctx() ctx: Context
  ) {
    return this.spotifyService.refreshSpotifyAccessToken(input);
  }

  @Mutation(() => GetPlaybackStateResponse, { nullable: true })
  @UseMiddleware(ValidateToken)
  async getPlaybackState(
    @Arg("input") input: SpotifyInput,
    @Ctx() ctx: Context
  ) {
    return this.spotifyService.getPlaybackState(input);
  }

  @Mutation(() => SpotifyResponse, { nullable: true })
  @UseMiddleware(ValidateToken)
  async saveRecentlyPlayedTracks(
    @Arg("input") input: SpotifyInput,
    @Ctx() ctx: Context
  ) {
    return this.spotifyService.saveRecentlyPlayedTracks(input);
  }
}
