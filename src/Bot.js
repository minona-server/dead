const client = global.Client;
const { Client } = require("discord.js");
const Config = require("./Configuration/Config.json");

const EM = require("./Managers/EventManager");

require("./Managers/InviteManager");

EM.addEvent("CommandHandler");
EM.addEvent("Timer.js");

EM.addEvent("Stat/OnMessageStat");
EM.addEvent("Stat/OnVoiceReady");
EM.addEvent("Stat/OnVoiceStateUpdate");

EM.addEvent("Penal/OnMemberUpdate");
EM.addEvent("Penal/OnReady");
EM.addEvent("Penal/OnVoiceStateUpdate");

EM.addEvent("Misc/Welcome.js");
EM.addEvent("Misc/PrivateChannels.js");
EM.addEvent("Market/CaseDrop.js");
EM.addEvent("Friends/OnVoiceStateUpdate");
EM.addEvent("Friends/OnVoiceReady");

EM.addEvent("Tag/UserUpdate");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
      let kanal = client.channels.cache.get('846698548846395442');
      client.user.setPresence({status: 'dnd', activity: { name: 'Kasmicaz', type: 'LISTENING' }})
      kanal.join();
  });
  
require("./Utils/Helper");
require("./Utils/Patch");

client.login(Config.Token).catch(console.error);