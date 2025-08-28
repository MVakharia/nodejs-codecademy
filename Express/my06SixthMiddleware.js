const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port} @ http://localhost:${port}.`);
});

function logger(req, res, next) {
    console.log(`Request received: ${req.method} ${req.url}`);

    next();
}

app.use(logger);

const stones = {
    sapphire: {value: 1, color: "blue"},
    emerald: {value: 2, color: "green"}
}

app.get("/", (req, res) => {
    res.send("Hello, Michael, and welcome back to Express.");
});

app.get("/stones/:name", (req, res, next) => {
    const stonesList = stones[req.params.name];
    console.log(req.params);

    if(stonesList) {
        res.send(stones[req.params.name]);
    }
    else {
        res.status(404).send('Stone not found.');
    }




});


