const { MessageEmbed } = require("discord.js")
module.exports.run = async(client, guild) =>{
  let join = new MessageEmbed()

    .setColor("#00FFFF")

    .setTitle("New Server Joined")

    .addField("Server Members :", guild.memberCount)

    .addField("Server Name :", guild.name)

    .setThumbnail(guild.iconURL())

    .addField("Server Owner :", guild.owner)

    .addField("VERIFICATION LEVEL :", guild.verificationLevel);

  client.channels.cache.get("748936869022007376").send(join);

  console.log("NEW SERVER JOIN" + guild.name);

}
  
  
  