const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Hello"));
app.post("/", (req, res) => res.send(`Hello ${req.body.name} `));

app.listen(8000, () => console.log(`server started at ${PORT}`));
