 const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, reaction, user) => {
    if(user.partial) await user.fetch();

    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();
    if(user.bot) return;

    const rr = new db.table("REACTION_ROLES");

    let emote = await rr.get(`emoteid_${reaction.message.guild.id}_${reaction.emoji.id}`);

    if(!emote) return;

    let messageid = await rr.get(`message_${reaction.message.guild.id}_${reaction.emoji.id}`);
    if(!messageid) return;

    let role = await rr.get(`role_${reaction.message.guild.id}_${reaction.emoji.id}`);
    if(!role) return;

    if(reaction.message.id == messageid && reaction.emoji.id == `${emote}`) {
        reaction.message.guild.members.fetch(user).then(member => {

            const embed = new Discord.MessageEmbed()
                .setColor('#de2121')
                .setDescription(`It's looks you already have the role: \`${reaction.message.guild.roles.cache.get(role).name}\``)


            if(member.roles.cache.has(role)) return user.send(embed)
            const sucsses = new Discord.MessageEmbed()
                .setColor('#10de47')
            .setTitle('ADDED ROLE!')
                .setDescription(`Role: \`${reaction.message.guild.roles.cache.get(role).name}\` has been added to you in **${reaction.message.guild.name}**`)


            member.roles.add(role) 
            return user.send(sucsses)
         
    })
    }


}