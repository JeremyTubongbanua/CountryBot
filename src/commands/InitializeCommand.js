const Command = require('./Command');

class InitializeCommand extends Command {

    constructor(name, description) {
        super(name, description);
    }

    async execute(interaction) {
        const embed = {
            color: 0x0099ff,
            title: 'Choose your country',

            description: 'This will be your faction associated with your discord account where you will compete in games against other countries.',
        };
        const message = await interaction.channel.send({ embeds: [embed] });
        await message.react('🇨🇦');
        await message.react('🇺🇸');
        await message.react('🇵🇭');
    }

}

module.exports = InitializeCommand;