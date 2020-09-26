const { MessageEmbed } = require("discord.js");
const config = require("../config");

const helpCommand = async (msg) => {
  if (
    (msg.member.hasPermission("BAN_MEMBERS") &&
      msg.member.hasPermission("KICK_MEMBERS")) ||
    msg.member.hasPermission("ADMINISTRATOR")
  ) {
    await msg.channel.send(
      new MessageEmbed()
        .setTitle("Help")
        .addField("here you will find help for commands", "⬇️⬇️⬇️")
        .setDescription("prefix: $")
        .addField("$avatar", "will show your avatar")
        .addField(
          "$sugerencia",
          `your suggestion will be sended in <#${config.channels.sugerencias}>`
        )
        .addField("$kick @user", "will kick te member mentioned")
        .addField("$ban @user", "will ban user mentioned")
        .addField("$warn @user", "will warn user mentioned")
        .addField("$advert", `your advert will be sended to <#${config.channels.advertisments}>`)
    );
  } else {
    await msg.channel.send(
      new MessageEmbed()
        .setTitle("Help")
        .addField("here you will find help for commands", "⬇️⬇️⬇️")
        .setDescription("prefix: $")
        .addField("$avatar", "will show your avatar")
        .addField(
          "$sugerencia",
          `your suggestion will be sended in <#${config.channels.sugerencias}>`
        )
    );
  }
};

exports.helpCommand = helpCommand;
