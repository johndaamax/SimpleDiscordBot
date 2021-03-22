const leaveChannel = (message, state) => {
	if (!message.guild) return
	// Only try to join the sender's voice channel if they are in one themselves
	if (message.member.voice.channel) {
		//If the user is in the same voice channel as the bot, make the bot leave the channel
		if (state.botChannel === message.member.voice.channel) {
			if (state.connection) {
				state.connection.disconnect()
			}
			state.botChannel.leave()
			state.connection = null
			state.dispatcher = null
			state.botChannel = null
			message.channel.send('Leaving channel...')
		} else {
			message.channel.send('I must be in the same voice channel as you to leave...')
		}
	} else {
		message.channel.send('You are not in a voice channel to banish me. Join one first.')
	}
}

module.exports = leaveChannel
