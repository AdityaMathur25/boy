const Discord = require("discord.js");

const db = require("quick.db");
const default_prefix = require("../config.json")
module.exports.run = async (client,  message, args) => {
  const main = await db.get(`status`);

  var activities_list = [

    `${main}`,

    " BUDDY'S SERVER",

    `!help For Commands! `,

    "HAPPY HELLOWEEN 👻",

    "Stay Home , Stay Safe.",

    "Best music bot || feel the song",

    `Over ${client.guilds.cache.size} Server's`,

    `Over ${client.users.cache.size} Member's`,

    `in ${client.channels.cache.size} channel's`

  ];

  var stream_list = ["PLAYING", "STREAMING", "WATCHING", "LISTENING"];

  setInterval(() => {

    const index = Math.floor(Math.random() * activities_list.length); // generates a random number between 1 and the length of the activities array list (in this case 5).

    const stat = Math.floor(Math.random() * stream_list.length); // generates a random number between 1 and the length of the activities array list (in this case 5).

    client.user.setActivity(activities_list[index], {

      type: stream_list[stat]

    }); // sets bot's activities to one of the phrases in the arraylist.

  }, 17000); //

  client.user.setStatus(`idle`);
  console.log("READ TO SERVER AS PRO")

};