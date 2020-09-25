const { MessageEmbed } = require("discord.js");

const banCommand = async (msg) => {
    const userModed = msg.mentions.members?.first();
    const kEmbed = new MessageEmbed()
    .setAuthor(`${msg.author.username}`, `${msg.author.avatarURL()}`)
    .setTitle("ban")
    .setDescription(`¡ ${msg.author.tag} ${userModed} le cae gordo a craig`)
    console.log(msg.member.hasPermission('BAN_MEMBERS'))

    if(userModed && msg.member.hasPermission('BAN_MEMBERS')){
        userModed.ban()
            .then(() => {
                msg.channel.send(
                    kEmbed
                )
                console.log(`${msg.author} ${userModed} le cae gordo a craig`)
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

exports.banCommand = banCommand