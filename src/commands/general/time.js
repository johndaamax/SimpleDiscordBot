const weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
const month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')

const time = (message) => {
    const date = new Date()
    message.reply('it is **' + weekday[date.getDay()] + ', ' + month[date.getMonth()] + ' ' + date.getDate() + ' ' + date.toLocaleTimeString() + '**')
}

module.exports = time
