const next = (message, state) => {
    if(state.dispatcher){
        state.dispatcher.end()
    } else {
        message.reply('No song is currently playing')
    }
}

module.exports = next
