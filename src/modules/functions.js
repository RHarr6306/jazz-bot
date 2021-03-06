const { devMode } = require('../config/config')

module.exports = client => {
    setTimeout(client.refreshActivity = () => {
        const { users } = client
        client.user.setPresence({
            activity: {
                name: devMode ? 'In Development' : `Jazz for ${users.cache.size} users`,
                type: 'PLAYING'
            },
            status: devMode ? 'dnd' : 'online'
        })
    }, 60 * 60 * 1000)
}
