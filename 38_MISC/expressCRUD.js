const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// retrive logs from Json
app.get("/logs", (req, res) => {
  fs.readFile("logs.json", "utf8", (err, data) => {
    if (err) res.status(404).send("No logs found!");
    res.header("Content-Type", "application/json");
    res.send(data);
  });
});

app.get("/logs/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("./logs.json", "utf8", (err, data) => {
    if (err) res.status(400).send("Not found!");

    logs = JSON.parse(data);
    if (id in logs) {
      res.header("Content-Type", "application/json");
      res.send(logs[id]);
    } else res.status(404).send("No logs found!");
  });
});

// log to db (json here)
app.post("/logs", (req, res) => {
  const { id, source, amount, unit } = req.body;
  fs.readFile("./logs.json", "utf8", (err, data) => {
    // If data then parse it
    let logs = err || !data ? {} : JSON.parse(data);

    // to add the new object to logs
    if (logs[id]) {
      res.status(409).send("Key already exists, Try Patch or Put!");
    } else {
      logs[id] = { source: source, amount: amount, unit: unit };
    }

    fs.writeFile("./logs.json", JSON.stringify(logs), (writeErr) => {
      if (writeErr) res.status(500).send("Error saving the log");
      res.status(201).send("Data logged successfully");
    });
  });
});

// patch request to emmission data
app.patch("/logs/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("./logs.json", "utf8", (err, data) => {
    if (err) return res.status(400).send("Not found!");

    logs = JSON.parse(data);
    if (logs[id]) {
        // old data unpacked -> overwritten by data in req.body
      logs[id] = { ...logs[id], ...req.body };
    } else return res.status(404).send("Data not found!");

    fs.writeFile("./logs.json", JSON.stringify(logs), (writeErr) => {
      if (writeErr) res.status(500).send("Error updating the log");
      return res.status(201).send("Data updated successfully");
    });
  });
});

// delete request
app.delete("/logs/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("./logs.json", "utf8", (err, data) => {
    if (err) res.status(400).send("Not found!");

    logs = JSON.parse(data);
    if (logs[id]) {
      delete logs[id];
    } else {
      res.status(404).send("ID not found");
    }

    fs.writeFile("./logs.json", JSON.stringify(logs), (writeErr) => {
      if (writeErr) res.status(500).send("Error deleting the data");
      res.status(201).send("Data deleted successfully");
    });
  });
});

app.use(/(.*)/, (req,res) => {
    res.status(404).send("Path doesn't exist!")
})

app.listen(port, () => console.log(`Listening on port ${port}`));
