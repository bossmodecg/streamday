const path = require('path');

const BossmodeCG = require('@bossmodecg/core').default;

const Clientele = require('@bossmodecg/module-clientele').default;
const Example = require('@bossmodecg/module-example').default;
const OBSStudio = require('@bossmodecg/module-obsstudio').default;
const SimpleStore = require('@bossmodecg/module-simplestore').default;
const Twitch = require('@bossmodecg/module-twitch').default;

new BossmodeCG.Server(
{
  auth: {
    frontend: {
      "Example Frontend": "this_is_an_example_password"
    },
    management: {
      "Example Manager": "this_is_another_example_password"
    },
  }
},
[
  new Clientele(),
  new Example({
    countInterval: 1500
  }),
  new OBSStudio({
    url: "127.0.0.1:4444",
  }),
  new SimpleStore(),
  new Twitch({
    identity: {
      // Used for the built-in IRC bot that pulls events. You can get an oauth'd
      // IRC password through TwitchApps: https://twitchapps.com/tmi
      username: "TWITCH_USERNAME",
      password: "oauth:TWITCH_IRC_OAUTH"
    },
    // This one is a little more work. You need to create a Twitch application
    // attached to your account:
    //
    // Then pass it into the TwitchApps generator: https://twitchapps.com/tokengen
    //
    // The list of scopes that BossmodeCG expects are (put them all on one line):
    //
    // channel_read channel_editor channel_commercial channel_subscriptions
    // chat_login channel_feed_read channel_feed_edit
    oauthClientId: "OAUTH_PASSWORD",
    channel: "#TWITCH_USERNAME"
  })
]).run();
