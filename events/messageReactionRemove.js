const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, reaction, user) => {

        const rr = new db.table("REACTION_ROLES");

        if(user.partial) await user.fetch();

        if(reaction.partial) await reaction.fetch();

        if(reaction.message.partial) await reaction.message.fetch();

        if(user.bot) return;

        let emote = await rr.get(`emoteid_${reaction.message.guild.id}_${reaction.emoji.id}`);

        if(!emote) return;

        let messageid = await rr.get(`message_${reaction.message.guild.id}_${reaction.emoji.id}`);

        if(!messageid) return;

        let role = await rr.get(`role_${reaction.message.guild.id}_${reaction.emoji.id}`);

        if(!role) return;

        if(reaction.message.id == messageid && reaction.emoji.id == `${emote}`) {
            reaction.message.guild.members.fetch(user).then(member => {

                if(member.roles.cache.has(role)) {

                    let embed = new Discord.MessageEmbed()
                        .setColor('#10de47')
                        .setDescription(`Role: \`${reaction.message.guild.roles.cache.get(role).name}\` has been removed from you in **${reaction.message.guild.name}**`)
                    user.send(embed)
                    member.roles.remove(role)
                }
            })
        }
}