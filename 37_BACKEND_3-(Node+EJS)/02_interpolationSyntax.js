// How to embed JS code data with EJS html file to make it dynamic
// uses "EJS tags" in EJS file

const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`App is listning to port ${port}`);
});

// embeded js in html using EJS in given file
app.get("/", (req, res) => {
  res.render("interpolation_syntax.ejs");
});

// rolldice is called
app.get("/dice", (req, res) => {
  res.render("rollDice");
});