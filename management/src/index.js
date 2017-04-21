require("babel-polyfill");

import BossmodeCGM from '@bossmodecg/management-react';

import SimpleStore from '@bossmodecg/widget-simplestore';

import ExamplePanel from './ExamplePanel';

BossmodeCGM.launchApplication(
  document.getElementById("root"),

  async () => (await BossmodeCGM.fetchRemoteJSON('/config.json')).bossmodecg,
  async () => (await BossmodeCGM.fetchRemoteJSON('/config.json')).management,
  [
    {
      title: "Debug",
      widgets: [
        { type: SimpleStore.DebugPanel },
        { type: BossmodeCGM.Widgets.SocketInformation }
      ]
    }
  ]
);
