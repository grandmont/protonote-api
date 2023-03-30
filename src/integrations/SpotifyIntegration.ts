import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";

import {
  GetPlaybackStateResponse,
  SpotifyInput,
  SpotifyResponse,
} from "../schemas/SpotifySchema";
import SpotifyService from "../services/SpotifyService";
import ValidateToken from "../middlewares/ValidateToken";

@Resolver()
export default class SpotifyIntegration {
  constructor(private spotifyService: SpotifyService) {
    this.spotifyService = new SpotifyService();
  }

  @Mutation(() => SpotifyResponse)
  @UseMiddleware(ValidateToken)
  async swapSpotifyCode(@Arg("input") input: SpotifyInput) {
    return this.spotifyService.swapSpotifyCode(input);
  }

  @Mutation(() => SpotifyResponse)
  async refreshSpotifyAccessToken(@Arg("input") input: SpotifyInput) {
    return this.spotifyService.refreshSpotifyAccessToken(input);
  }

  @Mutation(() => GetPlaybackStateResponse, { nullable: true })
  @UseMiddleware(ValidateToken)
  async getPlaybackState(@Arg("input") input: SpotifyInput) {
    return this.spotifyService.getPlaybackState(input);
  }
}
