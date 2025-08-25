let { testNumber } = require('./numberGuessLogic');

process.stdout.write("I'm thinking of a number from 1 through 10. " +
    "What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

//This function takes a single parameter,
let playGame = (userInput) => {
    //Converts the given parameter to a string, trims it,
    //and saves it to the variable 'input'.
    let input = userInput.toString().trim();

    //Runs the function 'testNumber' on 'input', which plays the game.
    testNumber(input);
}

//Takes the user's input and passes it in as an argument to the 'playGame' function.
process.stdin.on('data', playGame);

