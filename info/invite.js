const Discord = require("discord.js")
module.exports = {
  name: "invite",
  description:
    "Get link of bot invite ",
  usage: "invite bot",
  category: "info",
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    
    embed.setTitle("INVITE ME", "BOT INVITE")
    embed.setDescription("<a:blueflame:750628582950174720>[INVITE BOT](https://discord.com/oauth2/authorize?client_id=734289655310057493&scope=bot) <a:blueflame:750628582950174720>");
   embed.setColor("BLUE");
    embed.setFooter("CREATED BY BUDDY");
    embed.setTimestamp();
    
    
    return message.channel.send(embed);
  //worked
  } 
  }
  
