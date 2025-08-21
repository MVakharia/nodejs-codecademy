const os = require('os');

let helloWorld = "Hello World!";

let helloWorldArray = helloWorld.split("");

console.log(helloWorld);

//type '.editor' in the terminal to be able to type multiple lines into the terminal
// and evaluate them all at once.

//Prints a message to the terminal if the argument is falsy.
//This will not print a message.
console.assert(helloWorld.length === 12);

//This will print the message 'Assertion failed'.
console.assert(helloWorld.length !== 12);

//Prints an array as a table of values with two columns.
// The left column lists the indexes of the array items,
// and the right column list the values of the array items.
console.table(helloWorldArray);

//Prints an array including the name of the compiler at its path,
//and the name of the file at its path.
console.log(process.argv);

//Prints the compiler executable file path.
console.log(process.argv[0]);

//Prints the program file path.
console.log(process.argv[1]);

console.log(os.type());

console.log(os.arch());

console.log(os.networkInterfaces());

console.log(os.homedir());

console.log(os.hostname());

console.log(os.uptime());

console.log(process.memoryUsage());
