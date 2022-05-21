const { SlashCommandBuilder } = require('@discordjs/builders');

class Command {

    name;
    description;
    slashCommandBuilder;

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.slashCommandBuilder = new SlashCommandBuilder().setName(name).setDescription(description);
    }

    async execute(interaction) {
        throw new Error('This should\'ve been implemented.');
    }

}

module.exports = Command;