const {RichEmbed} = require('discord.js')

const help = (message, botAvatar) => {
	const hlp = new RichEmbed()
		.setAuthor('Heisenbot commands', botAvatar)
		.addField('**!test**', 'The bot replies back as a test.')
		.addField('**!embed**', 'The bot writes back an embed.')
		.addField('**!time**', 'Shows the full date and time (GMT +2 offset).')
		.addField('**!youtube**', 'The bot plays music from a youtube list. Must be in a voice channel to use.')
		.addField('**!next**', 'Plays the next song in the list (used with **!youtube**).')
		.addField('**!pause**', 'Pauses the stream (used with **!youtube**).')
		.addField('**!resume**', 'Resumes the stream (used with **!youtube**).')
		.addField('**!playtime**', 'Shows how long a song has been on (used with **!youtube**).')
		.setColor(0xfa76c2)
		.setTimestamp()
		
	message.channel.send(hlp)
}

module.exports = help