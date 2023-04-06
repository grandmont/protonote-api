import moment from "moment";
import { User } from "@prisma/client";

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
      const playedAt = moment.unix(item.timestamp).toDate();
      const convertedPlayedAt = moment(playedAt).tz(user.timeZone).toDate();

      return (
        index === self.findIndex((t) => t.id === item.id) &&
        getDateString(convertedPlayedAt) === dateString
      );
    })
    // Remove tracks that already exist in the memo
    .filter(
      (item) =>
        !deezer.some(
          ({ deezerData: { externalId } }) => externalId === String(item.id)
        )
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

    const itemId = String(item.id);

    const deezerData = await prisma.deezerData.findFirst({
      where: { externalId: itemId },
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

      // Create data
      const result = await prisma.deezerData.create({
        data: {
          search: title,
          externalId: itemId,
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
