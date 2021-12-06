const express = require("express");
const app = express();
const port = 3000;

app.get("/get", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`example http://localhost:${port}`);
});
