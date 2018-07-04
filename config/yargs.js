const cmdOpts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Only prints in terminal', cmdOpts)
    .command('create', 'Save into a file', cmdOpts)
    .help()
    .argv;

module.exports = {
    argv
}