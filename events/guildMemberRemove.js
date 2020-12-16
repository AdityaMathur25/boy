const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { discord, MessageEmbed } = require("discord.js")


module.exports.run = async (client, member) => {
  let lul =  await client.db.fetch(`leechannel_${member.guild.id}`);
  if (lul === null) return;
  //defining 
//lol i already do but u seted leavechannel😫 all done
  //make ur browser to desktop cuz .. //its leave 
  const nobiya = new MessageEmbed()
  .setTitle("SAY-GOODBYE")
  .setColor("RANDOM")
  .setDescription(`${member.user.username} SAY-GOODBYE MEET YOU SOON!`)
  .setTimestamp()
  .setFooter(`${member.user.username} just left the server !`)
}
  