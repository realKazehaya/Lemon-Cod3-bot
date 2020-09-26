const { MessageEmbed } = require("discord.js");
const config = require("../../config");

const banCommand = async (msg) => {
  const userModed = msg.mentions.members?.first();
  const kEmbed = new MessageEmbed()
    .setAuthor(`${msg.author.username}`, `${msg.author.avatarURL()}`)
    .setTitle("ban")
    .setDescription(
      `${msg.author} ${userModed} ha sido baneado de ${config.name}`
    );
  console.log(msg.member.hasPermission("BAN_MEMBERS"));

  if (msg.member.hasPermission("BAN_MEMBERS")) {
    if (!userModed) {
      msg.reply("Hey, debes mencionar al usuario que quieres banear!");
    }
    userModed
      .ban()
      .then(() => {
        msg.channel.send(kEmbed);
        console.log(`${msg.author.tag} ${userModed.tag}  ha sido baneado de ${config.name}`);
      })
      .catch((err) => {
        msg.reply(`No se pudo banear a el usuario ${userModed}`);
        // Log the error
        console.error(err);
      });
  } else {
    msg.reply(
      "Hey, no tienes permisos suficientes o el usuario al que intentas banear no existe!"
    );
  }
};

exports.banCommand = banCommand;
