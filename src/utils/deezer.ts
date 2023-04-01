import { User } from "@prisma/client";
import moment from "moment";

import { prisma } from "../context";
import { getDateString, getWrittenDateString } from "../utils/parsers";

export const storeListeningHistory = async (
  dateString: string,
  data: any,
  user: User
) => {
  // Get the memo of the day
  const memo = await prisma.proto.findFirst({
    where: { userId: user.id, dateString },
    include: {
      deezer: {
        include: {
          deezerData: true,
        },
      },
    },
  });

  const deezer = memo ? memo.deezer : [];

  const entries = data.data
    // Remove duplicates and filter by date
    .filter((item, index, self) => {
      const playedAt = moment.unix(item.timestamp).tz(user.timeZone).toDate();

      return (
        index === self.findIndex((t) => t.id === item.id) &&
        getDateString(playedAt) === dateString
      );
    })
    // Remove tracks that already exist in the memo
    .filter(
      (item) =>
        !deezer.some(({ deezerData: { externalId } }) => externalId === item.id)
    );

  // Create memo if it does not exist
  const { id: memoId } = !memo
    ? await prisma.proto.create({
        data: {
          title: getWrittenDateString(dateString),
          dateString,
          userId: user.id,
        },
      })
    : memo;

  await entries.reduce(async (promise, item) => {
    await promise;

    const deezerData = await prisma.deezerData.findFirst({
      where: { externalId: item.id },
    });

    // Update the integrationData by adding relation with the proto
    if (deezerData) {
      console.log("deezerData exists", deezerData.search);
      await prisma.deezerDataOnProtos.create({
        data: {
          protoId: memoId,
          deezerDataId: deezerData.id,
        },
      });
    }

    if (!deezerData) {
      console.log("deezerData does not exist", item.title);

      const {
        id,
        title,
        link,
        timestamp,
        artist: { id: artistId, name: artistName },
        album: {
          id: albumId,
          title: albumTitle,
          link: albumLink,
          cover: albumCover,
        },
      } = item;

      // Get only the important data
      const track = {
        id,
        title,
        link,
        timestamp,
        artist: {
          id: artistId,
          name: artistName,
        },
        album: {
          id: albumId,
          title: albumTitle,
          link: albumLink,
          cover: albumCover,
        },
      };

      const result = await prisma.deezerData.create({
        data: {
          search: title,
          externalId: id,
          data: JSON.stringify(track) as string,
        },
      });

      await prisma.deezerDataOnProtos.create({
        data: {
          protoId: memoId,
          deezerDataId: result.id,
        },
      });
    }
  }, Promise.resolve());

  return true;
};
