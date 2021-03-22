const { MessageEmbed } = require('discord.js')

const embed = (message, payload) => {
	const emb = new MessageEmbed()
		.setTitle(payload.title)
		.setColor(payload.color)
		.setDescription(payload.description)
	message.channel.send(emb)
}

module.exports = embed
