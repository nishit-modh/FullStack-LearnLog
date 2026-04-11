// Express : A Node.js web application framework that helps us to make web applications
// It is used for server side programming.
const express = require("express");
const app = express();

// Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.
let port = 3000; // 8080

// listenes to the requests coming to server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

// app.get : to send different responce for different get request routes 
// ( this is specifically for get request only, similarly "app.post" and other request types can be used for differnt responces for the same or different routes)\
app.get("/", (req, res) => {
    res.send("Contacted Root")
    console.log(`This was a ${req.method} request`);
});

// get on home route
app.get("/home", (req, res) => {
    res.send("Contacted Home via GET")
    console.log(`This was a ${req.method} request`);
});
// post on home route
app.post("/home", (req, res) => {
    res.send("connected to home via POST")
    console.log(`This was a ${req.method} request`);
})

app.get("/help", (req, res) => {
    res.send("Contacted Help")
    console.log(`This was a ${req.method} request`);
});

// Catch-all route handler for undefined paths.
// Must be placed after all other route definitions to work correctly.
app.use((req, res) => {
    res.send("Path does not exist");
    console.log(`This was a ${req.method} request`);
});