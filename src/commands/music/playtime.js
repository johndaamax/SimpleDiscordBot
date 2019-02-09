const playtime = (message, state) => {
	if (state.dispatcher) {
		let minutes = Math.floor(state.dispatcher.time / 60000)
		let seconds = Math.floor((state.dispatcher.time - minutes * 60000) / 1000)
		message.reply('the song has been playing for **' + minutes + 'm ' + seconds + 'sec**')
	} else {
		message.reply('no song is currently playing')
	}
}

module.exports = playtime
