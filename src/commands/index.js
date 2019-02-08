const embed = require('./general/embed')
const test = require('./general/test')
const help = require('./general/help')
const time = require('./general/time')

const youtube = require('./music/youtube')
const next = require('./music/next')
const pause = require('./music/pause')
const resume = require('./music/resume')
const playtime = require('./music/playtime')

const ban = require('./admin/ban')
const kick = require('./admin/kick')

module.exports = {embed, test, help, time, youtube, next, pause, resume, playtime, ban, kick}