const Discord: any = require('discord.js')

const client: any = new Discord.Client({
    disableEveryone: true,
    fetchAllMembers: true,
    sync: true
})

import functions from './modules/functions'
import * as dotenv from 'dotenv'

functions(client)
dotenv.config()

client.config = require('./config/config.js')
client.loader = require('./modules/Loader')
client.models = {
    playlists: require('./models/playlists.model')
}

// database setup
const uri = process.env.URI
const uriParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const initDB = () => {
    const mongoose: any = require('mongoose')
    const mongodb: any = require('mongodb')
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
    const {
        registerModules,
        registerEvents,
        checkDiscordStatus
    } = client.loader
    
    console.clear()
    await registerModules(client)
    await registerEvents(client)
    await checkDiscordStatus(client)
    await client.login(process.env.TOKEN)
    initDB()
}

init()
