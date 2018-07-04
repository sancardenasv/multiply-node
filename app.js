const { multiplyAndSaveFile, multiplyAndPrint } = require('./multiply/multiply');
const { argv } = require('./config/yargs');
const colors = require('colors');

console.log('ARGV', argv);
console.log('BASE', argv.base);
console.log('LIMIT', argv.limit);

let command = argv._[0];
switch (command) {
    case 'list':
        multiplyAndPrint(argv.base, argv.limit)
            .catch(e => console.log(e));
        break;
    case 'create':
        multiplyAndSaveFile(argv.base, argv.limit)
            .then(file => console.log(`File has been saved: ${colors.green(file)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log(`Command ${command} not found`);
        break;
}

// const { multiplyAndSaveFile } = require('./multiply/multiply');

// let argv2 = process.argv;
// let base = argv2[2].split('=')[1];

// multiplyAndSaveFile(base)
//     .then(file => console.log(`File has been saved: ${file}`))
//     .catch(e => console.log(e));