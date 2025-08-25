//'console.log' does this and more.
process.stdout.write("Hello World!");

//The 'stdout' stands for 'standard output'.

//The 'on' method is usable here because 'process.stdin' is an instance of 'EventEmitter'.
process.stdin.on('data', (userInput) => {
    let input = userInput.toString();
    console.log(input);

    //The application won't automatically stop here,
    // so we need to terminate execution manually.
    process.exit(0);
})