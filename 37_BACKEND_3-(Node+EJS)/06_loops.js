const express = require("express");
const app = express();
const path = require("path");
let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log("app is listening");
});

app.get("/:username", (req, res) => {
  let { username } = req.params;
  const followers = ["nishit", "dhruvil", "dev", "nilesh"];
  res.render("loops", { username, followers });
});

// using normal app.use & app.send for reqs which are not get req with username attached
app.use("/", (req, res) => { // will intercept all unspecified requests
    res.send("Username can not be empty!");
})