const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
    console.log("Listening to " + port);
})
app.get("/", (req, res) => {
    res.send("Contacted to Root")
    console.log(`This was a ${req.method} request`);
});

// we use "/:" where writing ":" means we are taking in variable
app.get("/:username", (req, res) => {
    console.log(req.params);
    res.send("Hello I am Root...And you enterd username")
});

// multiple Params are also accepted -> will auto accept when 3 para incerted
// like -> http://localhost:3000/nishit/njm/7434
app.get("/:username/:id/:Pass" , (req, res) => {
    console.log(req.params);
    let {username, id, Pass} = req.params;
    let htmlRes = `<h1>Welcome to the page of @${username} with the id ${id}</h1>`
    res.send(htmlRes);
});
// this is used to generate custom pages like if we change user name in insta url it will give different responce