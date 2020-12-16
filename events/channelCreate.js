const db = require("quick.db")
const { MessageEmbed } = require("discord.js")


module.exports.run = async(client, channel) =>{
 if (
    channel.type === "category" ||
    channel.type === "dm" ||
    channel.type === "unknown"
  )
    return;
  let Typed;

  if (channel.type === "text") {

    Typed = "Text";

  } else if (channel.type === "voice") {

    Typed = "Voice";

  } else if (channel.type === "news") {

    Typed = `News`;

  } else {

    Typed = `Store`;

  }
  let Nsfw;

  let Limit;

  if (channel.type !== "voice") {

    Nsfw = channel.nsfw ? "Yes" : "No";

  } else {

    Limit = channel.userLimit > 0 ? channel.userLimit : "Unlimited";

  }

  let Pos;

  if (channel.position === "-1") {

    Pos = `Last`;

  } else {

    Pos = channel.position + 1;

  }
  let Embed = new MessageEmbed()

    .setColor("RANDOM")

    .setTitle(`Channel Created!`)

    .setDescription(`A Channel Is Created!`)

    .addField(`Name`, channel.name, true)

    .addField(`Type`, Typed, true)

    .addField(`ID`, channel.id, true)

    .addField(`Category`, channel.parent, true)

    .addField(`Position`, Pos, true)

    .addField(

      `${channel.type !== "voice" ? "Nsfw" : "Users Limit"}`,

      `${channel.type !== "voice" ? Nsfw : Limit}`

    )

    .addField(

      `${channel.type !== "voice" ? "Topic" : "Created Date"}`,

      `${

        channel.type !== "voice"

          ? channel.topic || "No Topic!"

          : channel.createdAt.toDateString()

      }`

    )

    .setTimestamp();
  
  let modlog = db.get(`moderation.${channel.guild.id}.modlog`);

    if (!modlog) return;

    // Return if it's not enabled.

    if (channel.id === modlog.channel) return;

    // This will prevent any chaos when deleting some message inside the modlog.

    let toggle = modlog.toggle;

    if (!toggle || toggle == null || toggle == false) return;
  return
  client.channels.cache.get(modlog).send(Embed)
}