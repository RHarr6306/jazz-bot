const joinChannel = (msg, channel) => {
    channel.join()
    return msg.react('👍')
}

module.exports = (msg, client, args) => {
    const channel = msg.member.voice.channel
    return (channel)
        ? joinChannel(msg, channel)
        : msg.reply('You are not connected to a voice channel!')
}
