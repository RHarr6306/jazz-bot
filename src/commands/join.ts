const joinChannel = (react, channel) => {
    channel.join()
    return react('👍')
}

export default ({ react, member, reply }, client, args) => {
    const channel: any = member.voice.channel
    return (channel)
        ? joinChannel(react, channel)
        : reply('You are not connected to a voice channel!')
}
