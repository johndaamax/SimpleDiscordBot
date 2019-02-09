const ytdl = require('ytdl-core')
const ytList = require('./assets/youtubeList.json')

const youtube = (message, state) => {
    if (!message.guild) 
        return   
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
        if(state.connection === null || state.botVoiceChannel !== message.member.voiceChannel) {
            message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
                state.connection = connection
                state.botVoiceChannel = message.member.voiceChannel
                play(message, state)
            })
            .catch(e => console.error(e))
        } else {
            play(message, state)
        }
    } else {
        message.channel.send('You are not in a voice channel. Try joining one first.')
    }
}

const play = (message, state) => {
    const streamOptions = {
        volume: 0.5,
        bitrate: 'auto'
    }

    if(ytList.link[0]){
        state.dispatcher = state.connection.playStream(ytdl(ytList.link[0], {filter: 'audioonly'}), streamOptions)
        message.channel.send('Currently playing: :notes: ' + ytList.name[0] + ' :notes:')
        ytList.link.shift()
        ytList.name.shift()
        const str = ytList.link.length === 1 ? ' song' : ' songs'
        message.channel.send(ytList.link.length + str + ' left in the queue.')
        state.dispatcher.on('end', () => play(message, state))
    } else {
        message.channel.send('The song queue is empty.')
        state.connection.disconnect()
        state.connection = null
        state.dispatcher = null
    }
    state.dispatcher.on('error', e => {
        // Catch any errors that may arise
        console.error(e);
    });
}

module.exports = youtube