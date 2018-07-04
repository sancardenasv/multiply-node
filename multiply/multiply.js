const fileSystem = require('fs');
const colors = require('colors');

let multiplyAndPrint = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Base "${base}" is not a number`);
            return;
        } else if (!Number(limit)) {
            reject(`Limit "${limit}" is not a number`);
            return;
        }

        console.log('=========='.green);
        console.log(`Table of ${base}`.green);
        console.log('=========='.green);

        for (let number = 1; number <= limit; number++) {
            console.log(`${base} * ${number} = ${base * number}`);
        }
    });
}

let multiplyAndSaveFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Input "${base}" is not a number`);
            return;
        } else if (!Number(limit)) {
            reject(`Limit "${limit}" is not a number`);
            return;
        }
        let data = '';

        for (let number = 1; number <= limit; number++) {
            data += (`${base} * ${number} = ${base * number}\n`);
        }

        fileSystem.writeFile(`tables/table-${base}-to-${limit}.txt`, data, (err) => {
            if (err) {
                reject(err)
            }
            resolve(`table-${base}-to-${limit}.txt`);
        });
    });
}

module.exports = {
    multiplyAndPrint,
    multiplyAndSaveFile
}