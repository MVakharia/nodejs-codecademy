const readline = require('readline');

const fs = require('fs');

const myInterface = readline.createInterface({
    input: fs.createReadStream('trails.js')
});

myInterface.on('line', (fileLine) => {
    console.log(`The line read: ${fileLine}`);
});

const printData = (data) => {
    console.log(`The line read: ${data}`);
}

myInterface.on('line', printData);