// using conditional statements in ejs

const express = require("express");
const app = express();
const path = require("path");
let port = 3000;

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log("App is Listning");
});

app.get("/", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1
  res.render("conditional_statements", { diceVal });
});
