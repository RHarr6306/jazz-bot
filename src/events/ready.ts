module.exports = async client => {
    const { user, users, guilds } = client
    client.refreshActivity()
    client.logger.ready(`${user.username} is ready playing with ${users.cache.size} users in ${guilds.cache.size} servers.`)
}
