const express = require("express");
const {response} = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

function logger (req, res, next) {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
}

app.use(logger);

//Use 'app.use()' to trigger 'express.json()'.
// This tells Express to automatically parse incoming requests with JSON payloads,
//and make that data available on req.body.
app.use(express.json());

//Declare and initialise a variable.
// (enquire about the syntax of the 'stones' object in 06Middleware)

const airlines = {
    asiana: { value: "Asiana Airlines", country: "South Korea" },
    jal: {value: "Japan Airlines", country: "Japan"},
    british: {value: "British Airways", country: "United Kingdom"}
}

//Declare a default app.get().

app.get("/", (req, res) => {
    res.send("Hello, and welcome to the airport.");
})

app.get("/airlines", (req, res) => {
    console.log(req.params);

    console.log(airlines);

    res.send(airlines);
})

//Declare an app.get to respond based on the object properties entered.

app.get("/airlines/:name", (req, res, next) => {
    console.log(req.params);

    console.log(airlines[req.params.name]);

    res.send(airlines[req.params.name]);
});

fetch(`http://localhost:${port}/airlines`, {
    method:'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        value: "JAL Updated",
        country: "Japan 🇯🇵"
    })
}).then(response => response.json())
    .then(data => console.log('Updated airline:', data))
    .catch(error => console.error('Error:', error));


//Declare a working 'put' function.

app.put("/airlines", (req, res, next) => {
    console.log("Executing the PUT function.");

    const {value, country} = req.body;

    if(!value || !country) {
        return res.status(400).json({error: "Missing value or country"});
    }

    airlines.jal = {value, country };

    res.json({
        message: "JAL airline updated successfully", updated: airlines.jal
    });
});

//Fetch it in the frontend from another JS script.

//Declare a working 'post' function.

//Fetch it in the frontend from another JS script.

//Declare a working 'delete' function.

//Fetch it in the frontend from another JS script.


