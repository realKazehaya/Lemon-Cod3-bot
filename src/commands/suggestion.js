const {MessageEmbed} = require('discord.js');
const config = require('../config');

const suggestions = async (msg, args) => {
    let sChannel = msg.guild.channels.cache.find(x => x.id === config.channels.sugerencias);//where will go the suggestion

    //we say to the user that his message was suscefully sended
    msg.channel
    .send(`la sugerencia esta en ${config.channels.sugerencias}`)
    msg.delete({ timeout: 1000 })//we remove the command message
    .then(msg => console.log(`Deleted message from ${msg.author.username} after 5 seconds`))
    .catch(console.error);

    const sEmbed = new MessageEmbed()
      .setTimestamp()
      .addField(`nueva sugerencia hecha por:`, `**${msg.author.tag}**`)
      .addField(`sugerencia:`, `${args}\n`)
      .setColor('RED');
      sChannel.send(sEmbed).then( message => {
        message.react("👍");
        message.react("👎");
      })
}

exports.suggestions = suggestions