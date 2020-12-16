const mcapi = require('mcapi');
const {discord, MessageEmbed} = require("discord.js")
const fetch = require("node-fetch")
module.exports = {
name: "mcskin",
category: "info",
description: "see mc skin and download",
run: async(client, message, args)=>{
try{
let user = args.join(" ")
if(!user){
return message.channel.send("don't provided name of skin!")
}
let uid = await mcapi.usernameToUUID(user)
let skin = new MessageEmbed()
.setTitle(`SKIN OF ${user}`)
.addField("NAME:", user, true)
.addField("Uuid:", uid, true)
.addField("NAME:", user, true)
.setColor("RANDOM")
.addField("Download:", `[Click-Here](https://minotar.net/download/${user})`, true)
.setImage(`https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${user}/700`)
.setThumbnail(`https://minotar.net/cube/${user}/100.png`)
message.channel.send(skin)
}catch(e) {
return message.channel.send("No such skin found!")
}
}}