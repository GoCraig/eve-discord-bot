const Discord = require("discord.js");
const client = new Discord.Client();
var auth = require('./auth.json');
 
client.on("ready", () => {
  console.log("I am ready!");
});

//Some simple commands to test to make sure its working
client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("you spent 2 hours and forgot to put in the right token");
    } else

    if (message.content.startsWith("Hey bot, do we like helo?")) {
        message.channel.send("Yes, we like helo");
    } else

    if (message.content.startsWith("Hey bot, do we like nervous?")){
        message.channel.send("Yes, we like nervous")
    }

    if (message.content.startsWith("Hey bot, do we like people?")){
        message.channel.send("Yes, we like everyone")
    }

    if (message.content.startsWith("Hey bot, do we like craig?")){
        message.channel.send("No, have you seen my source code?")
    }

    if (message.content.startsWith("Hey bot, respond to me")){
        message.channel.send("No")
    }

    if (message.content.startsWith("Hey bot, c++ is lame")){
        message.channel.send("You're not wrong")
    }

    if (message.content.startsWith("Hey bot, use a better language")){
        message.channel.send("What would you suggest? You know what I don't care nervous")
    }

});
 
client.login( auth.token );