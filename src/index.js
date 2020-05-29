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

// database setup
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const uri = process.env.URI
const uriParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const initDB = () => {
    mongodb.connect(uri, uriParams, err => {
        client.logger.log(
            err ? 'Error connecting to the database.' : 'Connected to database.',
            err ? 'error' : 'ready'
        )
    })

    mongoose.connect(uri, uriParams, err => {
        if (err) {
            client.logger.log('Error connecting mongoose to the database.', 'error')
        }
    })
}

const init = async () => {
    console.clear()
    const loader = client.loader
    await loader.registerModules(client)
    await loader.registerEvents(client)
    await loader.checkDiscordStatus(client)
    await client.login(process.env.TOKEN)
    initDB()
}

init()
