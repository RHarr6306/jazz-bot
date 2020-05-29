const path = require('path')

const createAbsolutePath = relativePath => path.join(__dirname, relativePath)

module.exports = {
    run: async (cmd, msg, client, args) => {
        const cmdPath = createAbsolutePath(`./commands/${cmd}.js`)
        
        return require(cmdPath)(msg, client, args)
    }
}
