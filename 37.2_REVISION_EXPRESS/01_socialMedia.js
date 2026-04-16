const express = require("express");
const app = express();
const fs = require("fs");
const port = 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home page
app.get("/", (req, res) => {
  console.log("Home Page");
  res.send("Welcome to the home Page");
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  res.send(`User ${username} registered successfully!`);
});

// --- LOGGER & SECURITY ---
// 1. Logger Middleware
app.use((req, res, next) => {
  console.log(`Req on: ${Date.now()} - ${req.method} to ${req.path}`);
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`,
    (err, data) => next()
  );
});

// 2. Auth Simulator Task
const checkToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  token === "123" ? next() : res.status(401).send("Access Denied!");
};

// --- SOCIAL MEDIA ---
// 3. PATH PARAMETER: Create a route '/instagram/:username'.
//    Log 'req.params' and send: "Welcome to @USERNAME's profile".
app.get("/instagram/:username", checkToken, (req, res) => {
  console.log(`User: ${req.params.username} Logged In`);
  res.send(`Welcome to ${req.params.username}'s Profile`);
});

// 4. QUERY STRING: Create a route '/search'.
//    Log 'req.query' and send: "Searching for: VALUE".
app.get("/search", (req, res) => {
  // console.log(req.query)
  // res.send(`Searching for ${req.query}`)

  // for multiple queries
  const queryDetails = Object.entries(req.query)
    .map(([key, value]) => `${key} = ${value}`)
    .join(", ");
  res.send(`Searching for: ${queryDetails || ""}`);
});

// 5. (LAST) WILDCARD: Create a route '*' to handle 404s with a custom message.
// Keep this last - all the paths below this won't work
app.all(/(.*)/, (req, res) => {
  res.status(404).send(`Page Not Found`);
});

app.listen(port, () => console.log("listening"));
