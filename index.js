const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", () => {
   console.log("¡Estoy preparado!");
});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");

  } else
  if(message.content.startsWith(prefix + "hola")) { 
     message.channel.send("Hola que tal?");

  }

});

client.login(config.token);