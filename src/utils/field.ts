const replaceCommas = (str: string[]) => `${str}`.replace(/,/g, '\n')

module.exports = {
    addTitle: (info: {}) => {
        const description = Object.entries(info).map(desc => {
            return `**${desc[0]}** - ${desc[1]}`
        })

        return replaceCommas(description)
    },
    addDescription: (info: {}) => {
        const description = Object.entries(info).map(desc => {
            return `${desc[1]}`
        })

        return replaceCommas(description)
    },
    addCommand: (info: {}) => {
        const description = Object.entries(info).map(desc => {
            return `\`$${desc[0]}\` ${desc[1]}`
        })

        return replaceCommas(description)
    }
}
