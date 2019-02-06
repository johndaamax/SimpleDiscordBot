const pause = (message, state) => {
    if(state.dispatcher){
        state.dispatcher.pause()
    } else {
        message.reply('No song is currently playing')
    }
}

module.exports = pause
