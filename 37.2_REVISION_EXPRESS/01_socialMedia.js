const express = require("express");
const app = express();
const port = 3003;

app.listen(port, () => {
  console.log("listining");
});

// --- YOUR TASKS ---
// 2. PATH PARAMETER: Create a route '/instagram/:username'.
//    Log 'req.params' and send: "Welcome to @USERNAME's profile".
app.get('/instagram/:username',(req, res) => {
  console.log("Recieved");
  console.log(req.params)
  res.send(`Welcome to ${req.params.username}'s Profile`);
});
// 3. QUERY STRING: Create a route '/search'.
//    Log 'req.query' and send: "Searching for: VALUE".
app.get('/search', (req,res) => {
    console.log(req.query)
    res.send(`Searching for ${req.query.q}`)
})
// 4. WILDCARD: Create a route '*' to handle 404s with a custom message.
app.all(/(.*)/, (req,res) => {
    res.status(404).send(`Page Not Found`)
})