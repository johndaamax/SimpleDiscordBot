const Discord = require('discord.js')

const TOKEN = require('./src/config')
const commands = require('./src/commands/index')

const bot = new Discord.Client()
const state = {
    dispatcher: null,
    connection:  null,
    botVoiceChannel: null
}   


// welcome channel id 543470200541151272
bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setActivity('Administrator')

    // bot.guilds.forEach(guild => {
    //     console.log(guild.id + '  ' + guild.name)
    //     guild.channels.forEach(ch => {
    //         console.log(ch.id + ' ' + ch.name)
    //     })
    // })
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => {ch.id === '543470200541151272'})
    channel.send(`Welcome to the server, ${member}`)
    //Assign a member role to anyone who joins
    const memberRole = member.guild.roles.find('name', 'Member')
    member.addRole(memberRole)
})
  
bot.on('message', (message) => {
    //Listen for commands that start with '!'
    if(message.content.charAt(0) === '!'){
        let command = message.content.slice(1)
        command = command.split(' ')
        switch (command[0]){
            case 'help':
                commands.help(message)
                break
            case 'test':
                commands.test(message)
                break
            case 'embed':
                commands.embed(message, {
                    title: 'A test title',
                    color: 0xffffff,
                    description: 'A test description'
                })
                break
            case 'time':
                commands.time(message)
                break
            case 'youtube':
                commands.youtube(message, state)
                break
            case 'next':
                commands.next(message, state)
                break
            case 'pause':
                commands.pause(message, state)
                break
            case 'resume':
                commands.resume(message, state)
                break
            case 'playtime':
                commands.time(message, state)
                break
            case 'ban':
                commands.ban(message)
                break
            case 'kick':
                commands.kick(message)
                break
            default:
                message.reply('Unrecognized command. Use **!help** for the list of available commands.')
                break
        }
    }
})

bot.login(TOKEN)