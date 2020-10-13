const dotenv = require('dotenv')
dotenv.config()


module.exports  = {
    name: 'Lemon Code',
    bot: {
        token: process.env.TOKEN,
        prefix: '$',
        color: {
            primary: '#FBD569'
        }
    },
    channels: {
        sugerencias: '756655269106286633', // ...
        bienvenidas: '756539206058246326', // ...
        advertisments: '756997817742131211' //..
    },
    roles: {
        warning: '757755882875387967', //..
        admin: '755532940120817676', //..
        invitado: false,
        everyone: '725468758923018381' //..
    },  
    categories:{
        SOPORTE: '759561861154471967' //...
    }
}
