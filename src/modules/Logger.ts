import * as chalk from 'chalk'
import * as moment from 'moment'

const log = (content: string, type:string='log') => {
    const timestamp: string = `[${moment().format('YYYY-MM-DD HH:mm:ss')}]`
    const format: string = `${timestamp} [${type.toUpperCase()}]: ${content}`
    switch (type) {
        case 'log': return console.log(chalk.white(format))
        case 'warn': return console.log(chalk.rgb(255, 150, 150)(format))
        case 'error': return console.log(chalk.redBright(format))
        case 'cmd': return console.log(chalk.white(format))
        case 'ready': return console.log(chalk.rgb(150, 255, 150)(format))
    }
}

const error = (...args) => this.log(...args, 'error')
const warn = (...args) => this.log(...args, 'warn')
const cmd = (...args) => this.log(...args, 'cmd')
const ready = (...args) => this.log(...args, 'ready')

export { log, error, warn, cmd, ready }
