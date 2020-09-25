const {MessageEmbed} = require('discord.js');
const config = require('../../config');

const warnCommand = async(msg) => {
    if (msg.member?.roles.cache.has(config.roles.admin)) {
        const user = msg.mentions.users.first();
        if (user) {
          const member = msg.guild?.member(user);
          if (member) {
            if (msg.member?.roles.cache.has(config.roles.warning)) {
                msg.reply(` ${user} ya tiene warning`);
            } else {
                member.roles.add(config.roles.warning).then(() => {
                new MessageEmbed().setTitle("Warn");
              });
            }
          }
        }
      }
}

exports.warnCommand = warnCommand