const {MessageEmbed} = require("discord.js");

const db = require("quick.db");

module.exports.run = async (client, oldMessage, newMessage) => {

    // In before, this will help you to fetch or get the previous content since the bot get started.
  if (oldMessage.content.toLowerCase() === newMessage.content.toLowerCase())return;
    let modlog = db.get(`moderation.${oldMessage.guild.id}.modlog`);

    if (!modlog) return;

    // Return if it's not enabled.

    if (oldMessage.channel.id === modlog.channel) return;

    // This will prevent any chaos when deleting some message inside the modlog.

    let toggle = modlog.toggle;

    if (!toggle || toggle == null || toggle == false) return;

   let Embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Message Edited!`)
    .setDescription(`A Message Is Edited | Author : <@${oldMessage.author.id}>`)
    .addField(`Old`, oldMessage.content, true)
    .addField(`New`, newMessage.content, true)
    .setTimestamp();
    return client.channels.cache.get(modlog.channel).send(Embed);

}