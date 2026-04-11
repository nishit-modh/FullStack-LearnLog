// EJS (Embedded JavaScript templates)
// EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
const express = require("express");
const app = express();

const port = 8080;

// express by deafult requires EJS, so we don't need to require seperately
// saetting ejs
app.set("view engine", "ejs"); // this sets view (template) engine to ejs

app.listen(port, () => {
    console.log("Listening to port " + port);
});

app.get("/", (req, res) => {
    res.send("I am Root");
});

// send large renders & code files using ejs render -> by default stored in views folder
// by using "res.render" it automatically signal ejs to search in view dir for render output
app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/output", (req, res) => {
    res.render("interpolation_syntax.ejs");
})