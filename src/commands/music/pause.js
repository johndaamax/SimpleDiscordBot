const pause = (message, state) => {
	if (state.dispatcher) {
		state.dispatcher.pause()
	} else {
		message.reply('no song is currently playing')
	}
}

module.exports = pause
