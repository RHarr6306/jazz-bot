import * as path from 'path'

module.exports = {
    run: async (cmd: string, msg, client, args) => {
        const cmdPath = path.join(__dirname, `./commands/${cmd}.js`)

        return require(cmdPath)(msg, client, args)
    }
}
