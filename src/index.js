'use strict';


const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const config = require('./config');
const { suggestions } = require('./commands/suggestion');
const { AvatarCommand } = require('./commands/avatar');
const { kickCommand } = require('./commands/moderation/kick');
const { banCommand } = require('./commands/moderation/ban');
const { warnCommand } = require('./commands/moderation/warn');
const { advertisments } = require('./commands/advertisement');


const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});


  client.on('message', async msg => {
    const commandArguments = msg.content.split(" ");

    let commandName = commandArguments.shift() || config.bot.prefix;
    commandName = commandName.slice(config.bot.prefix.length);

    switch (commandName) {
        case 'avatar':
            await AvatarCommand(msg);
            break;
        case 'kick':
            await kickCommand(msg);
            break;
        case 'ban':
            await banCommand(msg);
            break;
        case 'warn':
            await warnCommand(msg);
            break;
        case 'sugerencia':
            await suggestions(msg, commandArguments)
            break;
        case 'advert': 
            await advertisments(msg, commandArguments)
    }
  });

client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.cache.find(ch => ch.id === config.channels.bienvenidas);

  if (!channel) return;

  const welcomeEmbed = new MessageEmbed()
      .setTitle('prueba')
      .setColor('99B8E0')
      .setDescription(`Bienvenido embed${member}`)

  channel.send(
    welcomeEmbed
  )
});


client.login(config.bot.token);