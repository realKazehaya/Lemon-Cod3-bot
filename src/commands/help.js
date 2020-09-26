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
        .setDescription(`prefix: ${config.bot.prefix}`)
        .addField(`${config.bot.prefix}avatar`, "will show your avatar")
        .addField(
          `${config.bot.prefix}sugerencia`,
          `your suggestion will be sended in <#${config.channels.sugerencias}>`
        )
        .addField(`${config.bot.prefix}kick @user`, "will kick te member mentioned")
        .addField(`${config.bot.prefix}ban @user`, "will ban user mentioned")
        .addField(`${config.bot.prefix}warn @user`, "will warn user mentioned")
        .addField(`${config.bot.prefix}advert`, `send an stylized embed to advert something`)
        .addField(`${config.bot.prefix}clear number`, "will clear the number of messages desired")
        .addField(`${config.bot.prefix}support`, "will send a message click in the reaction to enter in the new support channel")
    );
  } else {
    await msg.channel.send(
      new MessageEmbed()
        .setTitle("Help")
        .addField("here you will find help for commands", "⬇️⬇️⬇️")
        .setDescription("prefix: $")
        .addField(`${config.bot.prefix}avatar`, "will show your avatar")
        .addField(
          `${config.bot.prefix}sugerencia`,
          `your suggestion will be sended in <#${config.channels.sugerencias}>`
        )
    );
  }
};

exports.helpCommand = helpCommand;
