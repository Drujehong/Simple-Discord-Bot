// Install dotenv and load the environment variables
require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

// Access the token from the environment variables
const token = process.env.TOKEN;

// Client is the Bot
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds, // Intents are set of permissions, // Guilds are servers
    IntentsBitField.Flags.GuildMembers, // GuildMembers are members inside a server
    IntentsBitField.Flags.GuildMessages, // To listen to messages
    IntentsBitField.Flags.MessageContent, // To read and access messages
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is ready to go!`);
});

client.on('messageCreate', (message) => {
  if(message.author.bot) {
    return;
  }

  if(message.content === 'hello'){
    message.reply('hello');
  }

  if(message.content === 'heyhey'){
    message.reply('heyhey monica');
  }

});

client.login(process.env.TOKEN);