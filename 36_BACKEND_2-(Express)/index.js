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

// Recieving the request & sending the responce
// app.use provides same responce irresponsive of the request route
app.use((req, res) => {
    console.log("Request Recieved!!");

    // express : parse the text-based http request to req object
    console.log(`This was a ${req.method} request`); // ALL req obj properties are accessible
    
    // res.send : sends responce (string, object, html file, array, etc. --> anything )
    res.send({
        name : "apple",
        color : "Blue"
    });

    // let html = "<h2>Fruit</h2><ul><li>Apple</li><li>Red</li></ul>";
    // res.send(html);
});