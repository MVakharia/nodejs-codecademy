const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`The server is now running on http://localhost:${port}!`);
});

//Once the server goes live, we need a GET request.

//The first parameter is the URL route you want to respond to.

//The second parameter is the callback function.
app.get('/', (req, res) => {
    res.send("Hello from Express!");
});

//At this point, the server is live,
// and when the link in the console is clicked, it opens a webpage that displays

