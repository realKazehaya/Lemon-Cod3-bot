const { MessageEmbed } = require("discord.js");
const config = require("../config");

const advertisments = async (msg, args) => {
  const sEmbed = new MessageEmbed()
    .setTimestamp()
    .setTitle(`**${msg.author.tag}**`)
    .setDescription(`${args.join(" ")}`)
    .setColor(config.bot.color.primary);

  if (msg.member.hasPermission("ADMINISTRATOR")) {
    let aChannel = msg.guild.channels.cache.find(
      (x) => x.id === config.channels.advertisments
    ); //where will go the suggestion

    if (!args) {
      msg.reply("por favor escribe lo que desees sugerir despues del comando");
    } else if (!aChannel) {
      msg.reply("no se puede encontrar el canal para colocar los anuncios");
    }
    //we say to the user that his message was suscefully sended
    msg.channel.send(`el anuncio esta en <#${config.channels.advertisments}>`);
    msg
      .delete({ timeout: 1000 }) //we remove the command message
      .then((msg) =>
        console.log(
          `Deleted message from ${msg.author.username} after 1 seconds`
        )
      )
      .catch(console.error);

    aChannel.send(sEmbed);
  } else {
    msg.reply("no tienes permisos o algo salio mal");
  }
};

exports.advertisments = advertisments;
