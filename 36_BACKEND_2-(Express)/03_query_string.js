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

// parameter storing the query and route for reqest of query should be same (if "q" = query then "search?q= <query_name>" ion route)
// q string will have the details of query stored, but http://localhost:3000/search?q=apple in this "q=" value will be considered query for q
app.get("/search" , (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("Nothing searched")
    }
    res.send(`Search results for : ${q}`);
})

// for random invalid paths 
app.use((req,res) => {
    res.send("Path does not exist");
})