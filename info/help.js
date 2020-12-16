const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
const default_prefix = require("../../config.json")
module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided :(")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("GREEN")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    }
  }
}

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
    
     embed.setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided :(")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#00FFFF")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;
let prefix = await db.get(`prefix_${message.guild.id}`) 
       if(prefix === null) 
         prefix = default_prefix; 
    
      let emx = new MessageEmbed()
         .setTitle("HELP MENU")
      .setDescription(`IF YOU WANT TO KNOW INFO SPECIFIC COMMAND TYPE >${prefix}help cmd>name
` + `TOTAL COMMANDS  ` +"`"+client.commands.size+ "`")
        .setColor("#00FFFF")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;
        let desc =  "`" + value.join("`, `") + "`";
let emojis = "<a:arrowslogo:751462628412358736>"
        emx.addField(`${emojis}${category.toUpperCase()}[${value.length}]`, desc);
      }
      let database = db.get(`cmd_${message.guild.id}`)

      if(database && database.length) {
        let array =[]
        database.forEach(m => {
          array.push("`" + m.name + "`")
        })

        emx.addField("Custom Commands", array.join(", "))
      }

      return message.channel.send(emx);
     
    }
  }
};
