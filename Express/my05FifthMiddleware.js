const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

function logger(req, res, next) {
    console.log(`Request received: ${req.method} ${req.url}`);

    next();
}

function loggerino(req, res, next) {
    console.log(`Request processed: ${req.method} ${req.url}`);

    next();
}

app.use(logger);

app.use(loggerino);

app.get('/', (req, res) => {
    res.send("Hello from Express!");
});

app.get('/helloworld', (req, res) => {
    res.send("Hello, world!");
})

app.get('/myname', (req, res) => {
    res.send("Your name is Michael Vakharia.");
})

app.get('/aboutme', (req, res) => {
    res.send("You're a software developer in training.");
})