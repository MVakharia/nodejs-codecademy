const readline = require("readline");

process.stdin.setEncoding("utf-8");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const validCredentials = {
    username: "mvakharia",
    password: "pass12345word"
}

let userInput = {};

rl.question("Please enter your username.\n", (username) => {
    userInput.username = username.trim();

    rl.question("Please enter your password: \n", (password) => {
        userInput.password = password.trim();
    })

    if(userInput.username === validCredentials.username
    && userInput.password === validCredentials.password
    ) {
        console.log("\n Login successful. Welcome, Michael.");
    }
    else {
        console.log("\n Invalid username or password.");
    }

    rl.close();
})

//Ask for some 'readline' practice drills.

