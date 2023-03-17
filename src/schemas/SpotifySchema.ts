import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class SpotifyInput {
  @Field(() => String, { nullable: true })
  code?: string;

  @Field(() => String, { nullable: true })
  redirectUri?: string;

  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => String, { nullable: true })
  dateString?: string;
}

@ObjectType()
export class SpotifyResponse {
  @Field(() => String)
  accessToken: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;
}

@ObjectType()
class ExternalURLs {
  @Field(() => String)
  spotify: string;
}

@ObjectType()
class Image {
  @Field()
  height: 640 | 300 | 64;

  @Field()
  url: string;

  @Field()
  width: 640 | 300 | 64;
}

@ObjectType()
class Artist {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
class Album {
  @Field(() => [Image])
  images: Image[];

  @Field(() => [Artist])
  artists: Artist[];

  @Field()
  external_urls: ExternalURLs;
}

@ObjectType()
class SpotifyItem {
  @Field()
  id: string;

  @Field()
  external_urls: ExternalURLs;

  @Field()
  name: string;

  @Field()
  album: Album;
}

@ObjectType()
export class Track {
  @Field(() => SpotifyItem)
  track: SpotifyItem;

  @Field(() => String)
  played_at: string;
}

@ObjectType()
export class GetPlaybackStateResponse {
  @Field()
  progress_ms: number;

  @Field()
  item: SpotifyItem;
}

@ObjectType()
export class SaveRecentlyPlayedTracksResponse {
  @Field(() => [Track])
  items: Track[];
}
