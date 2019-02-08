const help = (message) => {

  let str = 'Here is a list of available commands:\n\n'
  str += '**!test** : The bot replies back as a test.\n'
  str += '**!embed** : The bot writes back an embed.\n'
  str += '**!time** : Shows the full date and time (GMT + 2 offset).\n'
  str += '**!youtube** : The bot plays music from a youtube list. Must be in a voice channel to use.\n'
  str += '**!next** : Plays the next song in the list (used with **!youtube**).\n'
  str += '**!pause** : Pauses the stream (used with **!youtube**).\n'
  str += '**!resume** : Resumes the stream (used with **!youtube**).\n'
  str += '**!playtime** : Shows how long a song has been on (used with **!youtube**).\n'

  message.channel.send(str)
}

module.exports = help