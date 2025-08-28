//Requiring in the Express.js library so that I can use it to build a web server.
const express = require('express');

//The ignition switch for your Express server.
// 'express()' returns an Express application instance.
//We've stored that instance in 'app'.
const app = express();

//'app' can define routes like this:

/*
app.get("");

app.post("");

app.put("");

app.delete("");

//'app' can add middleware like this:

app.use("");

//'app' can configure settings like this:

app.set("", "");

app.listen();
*/


function logger(req, res, next) {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
}

//This method ensures that following the link provided in 'app.listen()'
// will execute the 'logger' method.
app.use(logger);

//The message in 'res.send()' will be visible
// in the body of the HTML document available via the link in 'app.listen()'.
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

//'express().listen' has the app begin listening for requests at the specified port number.
//
app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
});