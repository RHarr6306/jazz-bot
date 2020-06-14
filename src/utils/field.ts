const replaceCommas = (str: string[]) => `${str}`.replace(/,/g, '\n')

const addTitle = (info: {}) => {
    const description: string[]  = Object.entries(info).map(desc => {
        return `**${desc[0]}** - ${desc[1]}`
    })

    return replaceCommas(description)
}

const addDescription = (info: {}) => {
    const description: string[] = Object.entries(info).map(desc => {
        return `${desc[1]}`
    })

    return replaceCommas(description)
}

const addCommand = (info: {}) => {
    const description: string[]  = Object.entries(info).map(desc => {
        return `\`$${desc[0]}\` ${desc[1]}`
    })

    return replaceCommas(description)
}

export { addTitle, addDescription, addCommand }
