const { MessageEmbed } = require('discord.js')
const { colors, version } = require('../config/config')

let description = 'Missing arguments: `+playlist <create|view|add>`'
let statusColor = colors.red

const addSongDesc = songs => {
    songs.forEach(({ name, length, link }, i) => {
        const songDesc = `${i + 1} - [**${name}**](${link}) - ${length}\n`
        if (description.length + songDesc.length < 2000) {
            return description += songDesc
        }
    })
}

const createPlaylist = async (msg, client, args) => {
    statusColor = colors.yellow
    return description = 'Coming soon.'
}

const updatePlaylist = async (msg, client, args) => {
    statusColor = colors.yellow
    return description = 'Coming soon.'
}

// Check if playlist name exists
const findPlaylist = ({ playlists }, playlistName) => {
    const songsList = playlists.filter(playlist => playlist.name === playlistName)
    if (!songsList.length) {
        statusColor = colors.red
        description = 'Playlist not found.'
    }

    return songsList
}

const fetchPlaylist = async (msg, client, args) => {
    // Check if playlist name is defined
    args.shift()
    if (!args.length) return description = 'Not found: `+playlist view <name>`'

    statusColor = colors.yellow
    const { models, logger } = client
    const playlistName = args.join(' ')
    const collection = await models.playlists.findOne({
        id: msg.author.id
    }, err => {
        if (err) {
            logger.log('Unable to fetch playlist.', 'error')
        }
    })
    if (!collection) return description = 'You have no playlists!'

    const songsList = findPlaylist(collection, playlistName)
    if (!songsList) return

    const { songs } = songsList[0]
    description = songs ? '' : 'This playlist is empty!'
    if (songs) {
        statusColor = colors.green
        return addSongDesc(songs)
    }
}

module.exports = async (msg, client, args) => {
    const playlistEmbed = new MessageEmbed()
        .setColor(colors.green)
        .setAuthor('Playlist', msg.author.avatarURL())
        .setTimestamp(new Date())
        .setFooter(`JazzBot v${version}`)

    if (!args[0]) {
        playlistEmbed
            .setColor(colors.red)
            .setDescription('Missing arguments: `+playlist <create|view|add>`')

        description = ''
        return msg.channel.send(playlistEmbed)
    }

    switch (args[0]) {
        case 'create':
            await createPlaylist(msg, client, args)
            break

        case 'add':
            await updatePlaylist(msg, client, args)
            break

        case 'view':
            await fetchPlaylist(msg, client, args)
            break
    }

    playlistEmbed
        .setDescription(description)
        .setColor(statusColor)

    description = ''
    statusColor = colors.red
    return msg.channel.send(playlistEmbed)
}
