import { promisify } from 'util'
const readdir = promisify(require('fs').readdir)

const registerModules = async client => {
    const moduleFiles: any = await readdir('./src/modules/')
    moduleFiles.forEach(file => {
        const moduleName = file.split('.')[0]
        if (moduleName[0] === moduleName[0].toLowerCase() || moduleName === 'Loader') { return }
        client[moduleName.toLowerCase()] = require('./' + moduleName)
    })
}

const registerCommands = async client => {
    const cmdFolders: any = await readdir('./src/commands/')
    cmdFolders.forEach(async folder => {
        const cmdFiles: any = await readdir('./src/commands/' + folder + '/')
        if (cmdFiles.length > 0) client.logger.log(`Loading ${cmdFiles.length} commands from ${folder}`)
        const registeredCommands: string[] = []
        cmdFiles.forEach(file => {
            const commandName: string = file.split('.')[0]
            const props: any = require(`../src/commands/${folder}/${file}`)
            client.commands.set(props.help.name, props)
            props.conf.aliases.forEach(alias => {
                client.aliases.set(alias, props.help.name)
            })
            registeredCommands.push(commandName)
        })
        client.logger.log(`Loaded: [${registeredCommands.join(' ')}]`)
    })
}

const registerEvents = async client => {
    const eventFiles: any = await readdir('./dist/events/')
    client.logger.log(`Loading ${eventFiles.length} events`)

    const registeredEvents = []
    eventFiles.forEach(file => {
        const eventName: string = file.split('.')[0]
        const evt: any = require(`../events/${file}`)
        client.on(eventName, evt.bind(null, client))
        registeredEvents.push(eventName)
    })
    client.logger.log(`Loaded: [${registeredEvents.join(' ')}]`)
}

const checkDiscordStatus = client => {
    require('axios').get('https://srhpyqt94yxb.statuspage.io/api/v2/status.json')
        .then(({ data }) => client.logger.log(`Discord API Status: ${data.status.description}`))
}

export {
    checkDiscordStatus, 
    registerEvents, 
    registerCommands, 
    registerModules 
}
