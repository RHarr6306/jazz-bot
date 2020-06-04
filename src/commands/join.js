const joinChannel = (react, channel) => {
    channel.join()
    return react('👍')
}

module.exports = ({ react, member, reply }, client, args) => {
    const channel = member.voice.channel
    return (channel)
        ? joinChannel(react, channel)
        : reply('You are not connected to a voice channel!')
}
