import moment from "moment-timezone";
import { IntegrationProvider } from "@prisma/client";

import { prisma } from "../context";
import { DATE_FORMAT } from "../config/constants";
import SpotifyService from "../services/SpotifyService";

const CronJob = require("cron").CronJob;

const cronJob = new CronJob(
  "0 * * * *",
  async () => {
    try {
      const users = await prisma.user.findMany({
        where: {
          integrations: {
            some: {
              provider: {
                equals: IntegrationProvider.SPOTIFY,
              },
            },
          },
        },
        include: {
          integrations: true,
        },
      });

      users.forEach(async (user) => {
        console.log("userId:", user.id);

        const { timeZone } = user;

        const userDateString = moment.tz(timeZone).format(DATE_FORMAT);

        const spotifyIntegration = user.integrations.find(
          ({ provider }) => provider === IntegrationProvider.SPOTIFY
        );

        if (!spotifyIntegration) return null;

        const spotifyService = new SpotifyService();

        await spotifyService.syncRecentlyPlayedTracks(
          {
            accessToken: null,
            refreshToken: spotifyIntegration.refreshToken,
            dateString: userDateString,
          },
          user
        );
      });
    } catch (error) {
      console.log(error);
    }
  },
  null,
  false,
  "America/Los_Angeles"
);

export default cronJob;
