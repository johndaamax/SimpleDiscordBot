const ban = message => {
	if (message.member.hasPermission('ADMINISTRATOR')) {
		const member = message.guild.member(message.mentions.users.first())
		if (member) {
			member
				.ban({
					days: 1,
					reason: 'They were bad!'
				})
				.then(() => message.reply(`Successfully banned ${member.user.tag}`))
				.catch(err => {
					message.reply('I was unable to ban the member')
					console.error(err)
				})
		} else {
			message.reply("That user isn't in this guild!")
		}
	} else {
		message.reply("You don't have the required permission to ban someone!")
	}
}

module.exports = ban
