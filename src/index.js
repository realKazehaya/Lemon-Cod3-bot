"use strict";

const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("./config");
const { suggestions } = require("./commands/suggestion");
const { AvatarCommand } = require("./commands/avatar");
const { kickCommand } = require("./commands/moderation/kick");
const { banCommand } = require("./commands/moderation/ban");
const { warnCommand } = require("./commands/moderation/warn");
const { advertisments } = require("./commands/advertisement");
const { helpCommand } = require("./commands/help");
const { clearCommand } = require("./commands/clear");
const { supportCommand } = require("./commands/tickets/support");

const client = new Discord.Client();

client.on("ready", async () => {
  console.log("I am ready!");
  await client.user?.setActivity(
    `Escribe "${config.bot.prefix} help" para obtener ayuda.`
  ); // establish bot activity
});

client.on("message", async (msg) => {
  const prefix = msg.content.split(" ").shift().split("").shift();
  const commandArguments = msg.content.split(" ");
  let commandName = commandArguments.shift() || config.bot.prefix;
  commandName = commandName.slice(config.bot.prefix.length);

  if (prefix === config.bot.prefix) {
    switch (commandName) {
      case "avatar":
        await AvatarCommand(msg);
        break;
      case "kick":
        await kickCommand(msg);
        break;
      case "ban":
        await banCommand(msg);
        break;
      case "warn":
        await warnCommand(msg);
        break;
      case "support":
        await supportCommand(msg)
        break;
      case "sugerencia":
        await suggestions(msg, commandArguments);
        break;
      case "advert":
        await advertisments(msg, commandArguments);
        break;
      case 'clear':
        await clearCommand(msg, commandArguments);
        break;
      case "help":
        await helpCommand(msg);
        break;
    }
  }
});

client.on("guildMemberAdd", (member) => {
  member.roles.add(config.roles.invitado)
  const channel = member.guild.channels.cache.find(
    (ch) => ch.id === config.channels.bienvenidas
  );

  if (!channel) return;

  const welcomeEmbed = new MessageEmbed()
    .setTitle("BIENVENIDO")
    .setColor(config.bot.color.primary)
    .setDescription(`Bienvenido al servidor ${member}`);

  channel.send(welcomeEmbed);
});

client.login(config.bot.token);
