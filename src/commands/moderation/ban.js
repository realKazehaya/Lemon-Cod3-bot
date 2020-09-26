const { MessageEmbed } = require("discord.js");

const banCommand = async (msg) => {
  const userModed = msg.mentions.members?.first();
  const kEmbed = new MessageEmbed()
    .setAuthor(`${msg.author.username}`, `${msg.author.avatarURL()}`)
    .setTitle("ban")
    .setDescription(
      `${msg.author} ${userModed} ha sido baneado del servidor`
    );
  console.log(msg.member.hasPermission("BAN_MEMBERS"));

  if (msg.member.hasPermission("BAN_MEMBERS")) {
    if (!userModed) {
      msg.reply("procura mencionar a la persona que deseas banear");
    }
    userModed
      .ban()
      .then(() => {
        msg.channel.send(kEmbed);
        console.log(`${msg.author.tag} ${userModed.tag}  ha sido baneado del servidor`);
      })
      .catch((err) => {
        msg.reply(`No se pudo expulsar a el usuario ${userModed}`);
        // Log the error
        console.error(err);
      });
  } else {
    msg.reply(
      "no tienes permisos suficientes o el usuario al que intentas expulsar no existe"
    );
  }
};

exports.banCommand = banCommand;
