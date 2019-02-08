const kick = (message) => {

    if(message.member.hasPermission('ADMINISTRATOR')) {
		const member = message.guild.member(message.mentions.users.first())
		if (member) {
			member.kick()
				.then(() => message.reply(`Successfully kicked ${member.user.tag}`))					
				.catch(err => {
					message.reply('I was unable to kick the member')
					console.error(err);
				})
		} else {
			message.reply('That user isn\'t in this guild!')
		}
	} else {
		message.reply('You don\'t have the required permissions to kick someone!')
	}
}

module.exports = kick