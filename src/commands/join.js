module.exports = (msg, client, args) => {
    const channel = msg.member.voice.channel
    channel.join()
}
