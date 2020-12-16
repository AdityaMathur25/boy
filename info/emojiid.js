const { MessageEmbed } = require("discord.js");

module.exports = {

  name: "emojiid",

  description: "get any emoji id ",

  usage: "emojiid || [emoji name]",

  category: "info",

  aliases: ["eid", "emoid"],
  run: async (bot, message, args) => {

let name = args.join(' ')
let emoji = message.guild.emojis.cache.find(e => e.name === name)
if(!name){
  return message.channel.send("type emoji name for emoji id ")}
    if(!emoji){

  return message.channel.send("emoji name  is not valid ")
}
    return message.channel.send(`\`${emoji.id}\``)
  
}}
  