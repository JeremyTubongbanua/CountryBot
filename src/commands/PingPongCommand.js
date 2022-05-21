const Command = require('./Command');

class PingPongCommand extends Command {

    constructor(name, description) {
        super(name, description);
    }

    async execute(interaction) {
        await interaction.reply('Pong!');
    }

}

module.exports = PingPongCommand;