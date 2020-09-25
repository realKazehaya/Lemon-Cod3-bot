const {MessageEmbed} = require('discord.js');

const warnCommand = async(msg) => {
    if (msg.member?.roles.cache.has("756624226655404095")) {
        const user = msg.mentions.users.first();
        if (user) {
          const member = msg.guild?.member(user);
          if (member) {
            if (msg.member?.roles.cache.has("759173208045387838")) {
                msg.reply(` ${user} ya tiene warning`);
            } else {
                member.roles.add("759173208045387838").then(() => {
                new MessageEmbed().setTitle("Warn");
              });
            }
          }
        }
      }
}

exports.warnCommand = warnCommand