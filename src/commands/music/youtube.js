const ytdl = require('ytdl-core-discord')
const ytList = require('./assets/youtubeList.json')

const youtube = async (message, state) => {
	if (!message.guild) return
	// Only try to join the sender's voice channel if they are in one themselves
	if (message.member.voice.channel) {
		if (state.connection === null || state.botChannel !== message.member.voice.channel) {
			try {
				const connection = await message.member.voice.channel.join()
				state.connection = connection
				state.botChannel = message.member.voice.channel
				play(message, state)
			} catch (e) {
				console.error(e)
			}

		} else {
			play(message, state)
		}
	} else {
		message.channel.send('You are not in a voice channel. Try joining one first.')
	}
}

const play = async (message, state) => {
	const streamOptions = {
		volume: 0.5,
		bitrate: 'auto'
	}

	if (ytList[0]) {
		state.dispatcher = state.connection.play(await ytdl(ytList[0].link), { type: 'opus', filter: "audioonly" }, streamOptions)
		message.channel.send(`Currently playing: :notes: ${ytList[0].title} :notes:`)
		ytList.shift()
		const str = ytList.length === 1 ? ' song' : ' songs'
		message.channel.send(`${ytList.length} ${str} left in the queue.`)
		state.dispatcher.on('end', () => {
			setTimeout(() => {
				if (state.connection) {
					play(message, state)
				} else {
					return
				}
			}, 3000)
		})
	} else {
		message.channel.send('The song queue is empty.')
		state.connection.disconnect()
		state.connection = null
		state.dispatcher = null
	}
	state.dispatcher.on('error', e => {
		// Catch any errors that may arise
		console.error(e)
	})
}

module.exports = youtube
