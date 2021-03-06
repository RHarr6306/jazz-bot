module.exports = async (client, msg) => {
    // Handle command arguments
    const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()

    if (msg.author.bot) return

    // Check if the msg starts with a prefix
    if (!msg.content.startsWith(client.config.prefix)) return

    // Command handler
    require('../commands.js').run(cmd, msg, client, args)
}
