const { MessageEmbed } = require("discord.js")

module.exports.run = async(client, guild) =>{

 let join1 = new MessageEmbed()

    .setColor("RED")

    .setTitle("LEFT FROM SERVER")

    .addField("Server Members :", guild.memberCount)

    .addField("Server Name :", guild.name)

    .addField("Server Owner :", guild.owner)

    .addField("VERIFICATION LEVEL :", guild.verificationLevel);

  client.channels.cache.get("748936869022007376").send(join1);

  console.log("LEFT FROM SERVER" + guild.name);


  
  
  }