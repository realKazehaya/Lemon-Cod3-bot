const { MessageEmbed } = require("discord.js");
const config = require("../config");

const sayCommand = async (msg) => {

if(!args) return message.channel.send(`debe escribir un mensaje a enviar.`);
message.channel.send(args.join(" "));

exports.sayCommand = sayCommand;
