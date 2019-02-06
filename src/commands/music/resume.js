const resume = (message, state) => {
    if(state.dispatcher){
        state.dispatcher.resume()
    } else {
        message.reply('No song is currently playing')
    }
}

module.exports = resume
