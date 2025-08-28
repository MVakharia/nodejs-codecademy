const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
   console.log(`App is listening on port ${port}`);
   console.log(`Server is running on http://localhost:${port}`);
});

function logger (req, res, next) {
    console.log(`Request received: ${req.method} ${req.url}`);

    next();
}

//Any middleware defined with app.use() must be registered
//before app.get(), (an example of a route handler)
//if you want the middleware to affect those routes.

//Middleware only runs if the request hasn't been handled yet.
app.use(logger);

app.get('/', (req, res) => {
    res.send("Hello from Express!");
});





