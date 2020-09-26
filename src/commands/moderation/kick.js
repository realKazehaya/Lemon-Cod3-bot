const { MessageEmbed } = require("discord.js");

const kickCommand = async (msg) => {
    const userModed = msg.mentions.members?.first();
    const kEmbed = new MessageEmbed()
    .setAuthor(`${msg.author.username}`, `${msg.author.avatarURL()}`)
    .setTitle("Kick")
    .setDescription(`¡ ${msg.author} ${userModed} ha sido baneado del servidor`)
    console.log(msg.member.hasPermission('KICK_MEMBERS'))

    if(msg.member.hasPermission('KICK_MEMBERS')){
        if (!userModed) {
            msg.reply("procura mencionar a la persona que deseas echar");
          }
        userModed.kick()
            .then(() => {
                msg.channel.send(
                    kEmbed
                )
                console.log(`${msg.author} ${userModed} ha sido echado del servidor`)
            }).catch(err => {
                msg.reply(`No se pudo expulsar a el usuario ${userModed}`);
                // Log the error
                console.error(err);
              });
    }else{
        msg.reply(
            "no tienes permisos suficientes o el usuario al que intentas expulsar no existe"
          );
    }
}

exports.kickCommand = kickCommand