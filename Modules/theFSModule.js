const fs = require('fs');

let readDataCallback = (err, data) => {
    if(err) {
        console.log(`Something went wrong: ${err}`);
    }
    else {
        console.log(`Provided file contained: ${data}`);
    }
};

//'readFile' asynchronously reads an entire file.
//The third parameter is the callback function that is to be invoked
// once the task of file reading is complete.
//In the case of this callback function,
// the entire contents of the file get passed as an argument to the second parameter 'data'.
fs.readFile('./file.txt', 'utf-8', readDataCallback);

