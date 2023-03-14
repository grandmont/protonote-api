import { Field, InputType, InterfaceType, ObjectType } from "type-graphql";

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
}

@ObjectType()
export class SpotifyResponse {
  @Field(() => String)
  accessToken: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;
}

// export type PlaybackStateType = {
//   progress_ms: number;
//   item: {
//     album: {
//       artists: {
//         id: string;
//         name: string;
//       }[];
//       images: {
//         height: 640 | 300 | 64;
//         url: string;
//         width: 640 | 300 | 64;
//       }[];
//       release_date: string;
//     } & SpotifyItemType;
//   } & SpotifyItemType;
// };

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
}

@ObjectType()
class Item {
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
class Track {
  @Field(() => Item)
  track: Item;

  @Field(() => String)
  played_at: string;
}

@ObjectType()
export class GetPlaybackStateResponse {
  @Field()
  progress_ms: number;

  @Field()
  item: Item;
}

@ObjectType()
export class SaveRecentlyPlayedTracksResponse {
  @Field(() => [Track])
  items: Track[];
}
