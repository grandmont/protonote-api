import moment from "moment-timezone";
import { IntegrationProvider } from "@prisma/client";

import { prisma } from "../context";
import { DATE_FORMAT } from "../config/constants";
import DeezerService from "../services/DeezerService";

const CronJob = require("cron").CronJob;

const deezerJob = new CronJob(
  "*/10 * * * *",
  async () => {
    try {
      const users = await prisma.user.findMany({
        where: {
          integrations: {
            some: {
              provider: {
                equals: IntegrationProvider.DEEZER,
              },
            },
          },
        },
        include: {
          integrations: true,
        },
      });

      await users.reduce(async (promise, user) => {
        await promise;
        console.log("deezer job for userId:", user.id);

        const { timeZone } = user;

        const userDateString = moment.tz(timeZone).format(DATE_FORMAT);

        const deezerIntegration = user.integrations.find(
          ({ provider }) => provider === IntegrationProvider.DEEZER
        );

        if (!deezerIntegration) return null;

        const deezerService = new DeezerService();

        return await deezerService.syncUserHistory({
          accessToken: deezerIntegration.refreshToken,
          dateString: userDateString,
          user,
        });
      }, Promise.resolve());
    } catch (error) {
      console.log(error);
    }
  },
  null,
  false,
  "America/Los_Angeles"
);

export default deezerJob;
