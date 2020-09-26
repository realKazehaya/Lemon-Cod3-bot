const config = require("../../config")

const supportCommand = async (msg) => {
    let Smsg = await msg.channel.send('reacciona para crear un canal de soporte')
    await Smsg.react('✉️')


    let collector = Smsg.createReactionCollector((reaction, user) => {
        return user.id !== msg.client.user.id && user.id == msg.author.id
    })

    collector.on('collect', async (reaction) => {
        Smsg.delete();

        let reason;

        if(reaction.emoji.name === '✉️'){
            reason = 'soporte';
        }

        msg.channel.send('Se ha creado un canal de soporte para ti').then(async(m) => {
            await m.delete({timeout: 10000});
        })

        const RandomNum = Math.floor(Math.random()*(9999 - 1))
        const Schannel = `Soporte ${RandomNum}`

        msg.guild.channels.create(Schannel, {
            type: 'text',
            permissionOverWrites: [{ 
                id: msg.author.id,
                allow: [
                    'SEND_MESSAGES',
                    'READ_MESSAGES_HISTORY',
                    'VIEW_CHANNEL',
                    'ADD_REACTIONS',
                    'USE_EXTERNAL_EMOJIS'
                ]
            }]
        }).then(async(channel) => {
            await channel.setParent(config.categories.SOPORTE)
            await channel.overwritePermissions([{
                id: config.roles.everyone,
                deny: ["SEND_MESSAGES", "VIEW_CHANNEL","READ_MESSAGE_HISTORY", "ADD_REACTIONS"]
             }
           ]);

           await channel.overwritePermissions([{
            id: config.roles.everyone,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL","READ_MESSAGE_HISTORY", "ADD_REACTIONS"]
         }
       ]);
            await channel.send(`el usuario ${msg.author} ha creado este canal`).then(async (m) => {
                await m.react('📢')
                await m.awaitReactions(async(reaction, user) => {
                    if(reaction.emoji.name === '📢'){
                        const Securemsg = await reaction.message.channel.send('¿Seguro que desees que quieres borrar este canal de soporte?')
                        .then(async (m) => {
                            m.react('✅');
                            m.react('❌')
                         await m.awaitReactions(async (reaction, user) => {
                            if (user.bot) return;
                            if(reaction.emoji.name === '✅'){
                                reaction.message.channel.send('El canal actual sera borrado en 10 segundos')
                                setTimeout(async() => {
                                    await reaction.message.channel.delete()
                                }, 10000);
                            }else if(reaction.emoji.name === '❌'){
                                reaction.message.channel.send('El canal no se borrara').then(async (m) => {
                                    await m.delete({timeout :10000})
                                }) 
                             }
                        })
                })
            }
        })
    })
})
    
            })
        }


        exports.supportCommand = supportCommand