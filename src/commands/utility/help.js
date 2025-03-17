const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows a simple guide on how the bot works"),
  async execute(interaction) {
    await interaction.reply("You don't need help, you're a pro!");
  },
};
