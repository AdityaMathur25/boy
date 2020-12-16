
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

const discord = require("discord.js")

module.exports.run = async (client, member) => {

  let chx = await client.db.fetch(`welch_${member.guild.id}`);

 

  

   let data = await canva.welcome(member, { link: "https://i.pinimg.com/originals/f3/1c/39/f31c39d56512dc8fbf30f9d0fb3ee9d3.jpg" })

 
let stat =  await client.db.fetch(`wel-status-${member.guild.id}`)
  if(stat === "disable") return;
  let msg = await client.db.fetch(`wel-msg-${member.guild.id}`)
  if(!msg|| msg === null) msg = "**NONE**"
  let m = msg.replace("{user:mention}", member.user)
  let mg = m.replace("{user:name}", member.user.username)
  let mgs = mg.replace("{user:tag}", member.user.usertag)
  let mgss = mgs.replace("{server}", member.guild.name)
  let ffg = mgss.replace("{member:count}", member.guild.memberCount)
   let on = await client.db.fetch (`wel-dm-${member.guild.id}`)
   if(on === "off") return;
 const attach = new discord.MessageAttachment(data, "welcome.png")

  let welcome = new discord.MessageEmbed()
  .setDescription(ffg)
     .attachFiles(attach)     .setImage("attachment://welcome.png")
          .setColor("BLUE")
          .setTimestamp()
  await client.channels.cache.get(chx).send(welcome);
  if(on === "on"){
    return member.send(welcome)
    }
 

 let rolestatus = await client.db.fetch(`autorole-status-${member.guild.id}`)

if(rolestatus === 'disable') return;

   let database = await client.db.fetch(`autorole-${member.guild.id}`)

  if(!database) return;

  if(database && database.length) {

    let array =[]

      database.forEach(async (m) => {

      await member.roles.add(m.id)
        })}
}

