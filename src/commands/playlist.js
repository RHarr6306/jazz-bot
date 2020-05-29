const { MessageEmbed } = require('discord.js')
const { colors, version } = require('../config/config')

module.exports = async (msg, client, args) => {
    const playlistEmbed = new MessageEmbed()
        .setColor(colors.yellow)
        .setAuthor('Playlist', msg.author.avatarURL())
        .setTimestamp(new Date())
        .setFooter(`JazzBot v${version}`)
        .setDescription('ya like jazzzz <:ehehehe:687758370102444033>')

    return msg.channel.send(playlistEmbed)
}
