const time = (message, state) => {
    if(state.dispatcher){
        let minutes = Math.floor(state.dispatcher.time / 60000)
        let seconds = Math.floor((state.dispatcher.time - minutes * 60000) / 1000)
        message.reply(minutes + 'm ' + seconds + 'sec')
    } else {
        message.reply('No song is currently playing')
    }
}

module.exports = time
