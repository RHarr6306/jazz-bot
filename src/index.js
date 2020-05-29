const Discord = require('discord.js')

const client = new Discord.Client({
    disableEveryone: true,
    fetchAllMembers: true,
    sync: true
})

require('dotenv').config()
require('./modules/functions.js')(client)

client.config = require('./config/config.js')
client.loader = require('./modules/Loader')

const init = async () => {
    console.clear()
    const loader = client.loader
    await loader.registerModules(client)
    await loader.registerEvents(client)
    await loader.checkDiscordStatus(client)
    await client.login(process.env.TOKEN)
}

init()
