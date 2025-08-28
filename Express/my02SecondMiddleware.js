const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    //The contents of these curly braces trigger once the server is live.
    //In this case, it's the console.log() method.
    console.log(`The server is now running on http://localhost:${port}!`);
});

