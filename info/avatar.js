const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "avatar",
  description: "Get your own or someone else's avatar",
  usage: "[user mention]",
  category: "info",
  aliases: ["av", "a"],
  run: async (bot, message, args) => {
    let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
      message.member.roles.cache.forEach((role) => {
        roles.push(role.name);
      });//worked ... how i get time on footer..
    Embed.setTitle("AVATAR")
      Embed.setImage(message.author.displayAvatarURL({size: 2048, dynamic: true}));
      Embed.setColor(`#00FFFF`);
      Embed.setTimestamp();
    return message.channel.send(Embed);
    } else {
      let User = message.mentions.members.first();
      User.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`${bot.users.cache.get(User.id).tag}'s avatar!`);
      Embed.setImage(bot.users.cache.get(User.id).displayAvatarURL({size: 2048, dynamic: true}));
      Embed.setColor(`#00FFFF`);
      Embed.setTimestamp();
      
      return message.channel.send(Embed);
    }
  },
};
