const { MessageEmbed } = require("discord.js");
const config = require("../config");

const suggestions = async (msg, args) => {
  let sChannel = msg.guild.channels.cache.find(
    (x) => x.id === config.channels.sugerencias
  ); //where will go the suggestion
  console.log(args.length)
  if (!args || args.length === 0) {
    msg.reply("Hey, usa $sugerencia <sugerencia>");
  } else if (!sChannel) {
    msg.reply("Hey, no puede encontrar el canal Sugerencias!");
  } else{
    //we say to the user that his message was suscefully sended
    msg.channel.send(`Su sugerencia fue enviada a <#${config.channels.sugerencias}>`);
    msg
      .delete({ timeout: 1000 }) //we remove the command message
      .catch(console.error);

    const sEmbed = new MessageEmbed()
      .setTimestamp()
      .setTitle(`Sugerencia de:`, `**${msg.author.tag}**`)
      .setDescription(`${args.join(" ")}`)
      .setColor(config.bot.color.primary);
    sChannel.send(sEmbed).then((message) => {
      message.react("👍");
      message.react("👎");
    });
  }
};

exports.suggestions = suggestions;
