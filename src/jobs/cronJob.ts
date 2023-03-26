import moment from "moment-timezone";

import { DATE_FORMAT } from "../config/constants";

const CronJob = require("cron").CronJob;

const cronJob = new CronJob(
  "* * * * *",
  function () {
    console.log("You will see this message every minute");

    const dateString = moment(new Date().toISOString());

    const timeZone = "America/Sao_Paulo";

    console.log(dateString.tz(timeZone).format(DATE_FORMAT));
    console.log(dateString.tz("America/Los_Angeles").format(DATE_FORMAT));
  },
  null,
  false,
  "America/Los_Angeles"
);

export default cronJob;
