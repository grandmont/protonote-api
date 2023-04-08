import fetch from "node-fetch";
import { prisma } from "../context";
import { IntegrationProvider } from "../generated";
import SpotifyService from "../services/SpotifyService";
import { SPOTIFY_API_URL } from "../config/constants";

const migration = async () => {
  const integrationData = await prisma.integrationData.findMany();

  console.log(integrationData.length);

  let seen = new Set();
  var hasDuplicates = integrationData.some(function ({ externalId }) {
    return seen.size === seen.add(externalId).size;
  });

  console.log("hasDuplicates:", hasDuplicates);

  let strArray = integrationData.map(({ externalId }) => externalId);
  let findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) !== index);

  console.log(findDuplicates(strArray));

  // integrationData.forEach(({ search }) => {
  //   console.log(search);
  // });

  integrationData.forEach(({ data }) => {
    const parsed = JSON.parse(data);

    if (!parsed.track.album.name) {
      console.log("oh no");
      console.log(data);
    }
  });
};

export default migration;
