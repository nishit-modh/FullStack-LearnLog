const express = require("express");
const app = express();
const path = require("path");
let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// to use files from the public folder [SERVING STATIC FILES (css & js)]
app.use(express.static("public/CSS")); // specify the path we want to make public
app.use(express.static(path.join(__dirname, "public/JS"))); // to make it hardcoded path irrelevent of from where app starts

app.listen(port, () => {
  console.log("app is listening");
});

app.get("/:username", (req, res) => {
  const instaData = require("./data.json");
  let { username } = req.params;
  let data = instaData[username]; // to send only the data of current username
  if (data) {
    res.render("instaPage", { data }); // data becomes acceicible to ejs as data
  } else {
    res.render("instaErr");
  }
});

app.use("/", (req, res) => {
  res.send("Username can not be empty!");
});
