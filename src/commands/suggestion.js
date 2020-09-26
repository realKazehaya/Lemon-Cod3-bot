const { MessageEmbed } = require("discord.js");
const config = require("../config");

const suggestions = async (msg, args) => {
  let sChannel = msg.guild.channels.cache.find(
    (x) => x.id === config.channels.sugerencias
  ); //where will go the suggestion
  console.log(args.length)
  if (!args || args.length === 0) {
    msg.reply("por favor escribe lo que desees sugerir despues del comando");
  } else if (!sChannel) {
    msg.reply("no se puede encontrar el canal para colocar las sugerencias");
  } else{
    //we say to the user that his message was suscefully sended
    msg.channel.send(`la sugerencia esta en <#${config.channels.sugerencias}>`);
    msg
      .delete({ timeout: 1000 }) //we remove the command message
      .catch(console.error);

    const sEmbed = new MessageEmbed()
      .setTimestamp()
      .setTitle(`nueva sugerencia hecha por:`, `**${msg.author.tag}**`)
      .setDescription(`${args.join(" ")}`)
      .setColor(config.bot.color.primary);
    sChannel.send(sEmbed).then((message) => {
      message.react("👍");
      message.react("👎");
    });
  }
};

exports.suggestions = suggestions;
