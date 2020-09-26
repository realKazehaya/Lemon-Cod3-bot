const { MessageEmbed } = require("discord.js");
const config = require("../../config");

const warnCommand = async (msg) => {
  const wEmbed = new MessageEmbed()
    .setTitle("Warn")
    .setDescription(`el usuario ${user} ah sido avisado con un warning`);

  const user = msg.mentions.users.first();
  if (msg.member?.roles.cache.has(config.roles.admin)) {
    if (user) {
      const member = msg.guild?.member(user);
      if (member) {
        if (msg.member?.roles.cache.has(config.roles.warning)) {
          msg.reply(` ${user} ya tiene warning`);
        } else {
          member.roles.add(config.roles.warning).then(() => {
            msg.channel.send(wEmbed);
          });
        }
      }
    } else {
      msg.reply(`no se puede encontrar al usuario ${user}`);
    }
  } else {
    msg.reply(`no tienes permisos para poder hacer warn a el usuario ${user}`);
  }
};

exports.warnCommand = warnCommand;
