import BossmodeCG from '@bossmodecg/client';

import axios from 'axios';

export let client = null;

export async function init() {
  console.log("Initializing services.");

  client = await (async () => {
    const currentURL = new URL(window.location.href);

    const config = (await axios.get("/config.json")).data;
    config.bossmodecg.endpoint = config.bossmodecg.endpoint.replace("${THIS_HOSTNAME}", currentURL.hostname);

    const bossmodecgClient = new BossmodeCG.FrontendClient(config.bossmodecg);

    bossmodecgClient.connect();
    console.log("BossmodeCG client initialized.");
    return bossmodecgClient;
  })();
}
