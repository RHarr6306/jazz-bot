const { devMode } = require('../config/config')

module.exports = client => {
    setTimeout(client.refreshActivity = () => {
        const { users, guilds } = client
        client.user.setPresence({
            activity: {
                name: devMode ? 'In Development' : `${users.cache.size} users, ${guilds.cache.size} servers`,
                type: devMode ? 'PLAYING' : 'WATCHING'
            },
            status: devMode ? 'dnd' : 'online'
        })
    }, 60 * 60 * 1000)
}
