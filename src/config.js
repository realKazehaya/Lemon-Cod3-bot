const dotenv = require('dotenv')
dotenv.config()


module.exports  = {
    bot: {
        token: process.env.BOT_TOKEN,
        prefix: '$',
        color: {
            primary: '#99B8E0'
        }
    },
    channels: {
        sugerencias: '759174827717689394',
        bienvenidas: '756955213591740547',
        advertisments: '756623887453913122'
    },
    roles: {
        warning: '759173208045387838',
        admin: '759173208045387838'
    }
}