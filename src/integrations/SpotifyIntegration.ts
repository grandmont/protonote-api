import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import {
  GetPlaybackStateResponse,
  SpotifyInput,
  SpotifyResponse
} from "../schemas/SpotifySchema";
import SpotifyService from "../services/SpotifyService";
import { Context } from "../context";
import ValidateToken from "../middlewares/ValidateToken";

@Resolver()
export default class SpotifyIntegration {
  constructor(
    private spotifyService: SpotifyService
  ) {
    this.spotifyService = new SpotifyService();
  }

  @Mutation(() => SpotifyResponse)
  @UseMiddleware(ValidateToken)
  async swapSpotifyCode(
    @Arg("input") input: SpotifyInput,
  ) {
    return this.spotifyService.swapSpotifyCode(input);
  }

  @Mutation(() => SpotifyResponse)
  async refreshSpotifyAccessToken(
    @Arg("input") input: SpotifyInput,
  ) {
    return this.spotifyService.refreshSpotifyAccessToken(input);
  }

  @Mutation(() => GetPlaybackStateResponse, { nullable: true })
  @UseMiddleware(ValidateToken)
  async getPlaybackState(
    @Arg("input") input: SpotifyInput,
  ) {
    return this.spotifyService.getPlaybackState(input);
  }

  @Mutation(() => SpotifyResponse, { nullable: true })
  @UseMiddleware(ValidateToken)
  async saveRecentlyPlayedTracks(
    @Arg("input") input: SpotifyInput,
    @Ctx() ctx: Context
  ) {
    console.log("opa")
    return this.spotifyService.saveRecentlyPlayedTracks(input, ctx);
  }
}
