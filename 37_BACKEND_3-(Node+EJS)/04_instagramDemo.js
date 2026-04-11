// like IG by by editing username route give different pages

const express = require("express");
const path = require("path");
const app = express();
let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params; // :username is available as parameters
  res.render("instagram", { username });
  // console.log(username);
});
