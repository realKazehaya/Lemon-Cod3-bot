const {MessageEmbed} = require('discord.js');
const config = require('../config');

const AvatarCommand = async (message) => {
  await message.channel.send(
    // prettier-ignore
    new MessageEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL()}`)
      .setTitle("Avatar")
      .setDescription(`${message.author} Este es tu avatar!!!`)
      .setColor(`${config.bot.color.primary}`)
      .setImage(`${message.author.avatarURL()}`)
  );
}

exports.AvatarCommand = AvatarCommand
