const { MessageEmbed } = require("discord.js");
const config = require("../config");

const advertisments = async (msg, args) => {
  const sEmbed = new MessageEmbed()
    .setTimestamp()
    .setTitle(`**${msg.author.tag}**`)
    .setDescription(`${args.join(" ")}`)
    .setColor(config.bot.color.primary);

  if (msg.member.hasPermission("ADMINISTRATOR")) {
    if (!args || args.length === 0) {
      msg.reply("por favor escribe lo que desees sugerir despues del comando");
    }
    //we say to the user that his message was suscefully sended
    msg.channel.send(sEmbed);
  } else {
    msg.reply("no tienes permisos o algo salio mal");
  }
};

exports.advertisments = advertisments;
