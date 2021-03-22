const playtime = (message, state) => {
	if (state.dispatcher) {
		let minutes = Math.floor(state.dispatcher.streamTime / 60000)
		let seconds = Math.floor((state.dispatcher.streamTime - minutes * 60000) / 1000)
		message.reply(`The song has been playing for ** ${minutes}min ${seconds}sec **`)
	} else {
		message.reply('No song is currently playing')
	}
}

module.exports = playtime
