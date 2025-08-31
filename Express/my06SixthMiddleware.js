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

app.use(express.json());

const stones = {
    sapphire: {value: 1, color: "blue"},
    emerald: {value: 2, color: "green"},
    ruby: {value: 3, color: "red"},
    diamond: {value: 4, color: "white"}
}

app.get("/", (req, res) => {
    res.send("Hello, Michael, and welcome back to Express.");
});

app.get("/stones/:name", (req, res, next) => {
    const stone = stones[req.params.name];
    console.log(req.params);

    if(stone) {
        res.send(stones[req.params.name]);
    }
    else {
        res.status(404).send('Stone not found.');
    }
});

app.put("/stones/:name", (req, res, next) => {
    const stoneName = req.params.name;

    if(stones[stoneName]) {
        const {value, color} = req.body;

        if(value && color) {
            stones[stoneName] = {value, color};

            res.send({[stoneName]: stones[stoneName]});
        }
        else {
            res.status(400).send({error: "Missing value or color"});
        }
    }
    else {
        res.status(404).send({error: "Stone not found"});
    }

});
app.post("/stones", (req, res, next) => {
    const {name, value, color} = req.body;

    if(name && value && color) {
        stones[name] = {value, color};
        res.status(201).send({[name]: stones[name]});
    }
    else {
        res.status(400).send("Missing stone data");
    }
});

app.delete("/stones", (req, res, next) => {
    
})


