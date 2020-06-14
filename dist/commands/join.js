var joinChannel = function (react, channel) {
    channel.join();
    return react('👍');
};
module.exports = function (_a, client, args) {
    var react = _a.react, member = _a.member, reply = _a.reply;
    var channel = member.voice.channel;
    return (channel)
        ? joinChannel(react, channel)
        : reply('You are not connected to a voice channel!');
};
