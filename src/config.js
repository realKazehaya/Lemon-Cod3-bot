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
        sugerencias: '<#759174827717689394>'
    }
}