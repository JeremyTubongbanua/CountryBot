require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env.TOKEN;
const guildId = process.env.SERVER_ID;
const clientId = process.env.CLIENT_ID;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const InitializeCommand = require('./commands/InitializeCommand');
const PingPongCommand = require('./commands/PingPongCommand');
const commands = [
    new PingPongCommand('ping', 'Relpies with pong!'),
    new InitializeCommand('init', 'Initialize the country embed for the country channel'),
]

function deployCommands() {
    const cmds = commands.map(command => command.slashCommandBuilder.toJSON());
    const rest = new REST({ version: '9' }).setToken(token);

    rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: cmds })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);

}

client.once('ready', () => {
    deployCommands();
    console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    console.log(commandName);

    for (let i in commands) {
        let command = commands[i];
        if (command.name === commandName) {
            command.execute(interaction);
        }
    }

    // if (commandName === 'ping') {
    //     await interaction.reply('Pong!');
    // } else if (commandName === 'init') {
    //     initializeCommand(interaction)
    // }
});

client.login(token);